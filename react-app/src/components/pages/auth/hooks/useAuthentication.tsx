import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../../../lib/api/v1/auth';
import { isValidEmail } from '../../../../validator/emailValidator';
import { toastService } from '../../../../utils/toastService';

const useAuthentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [_, setCookie] = useCookies(['_access_token', '_client', '_uid']);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!isValidEmail(event.target.value)) {
        setEmailErrorMessage('メールアドレスの形式が正しくありません');
      } else {
        setEmailErrorMessage('');
      }
      setEmail(event.target.value);
    },
    [email],
  );

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setPassword(event.target.value);
    },
    [password],
  );

  const register = async () => {
    const res = await signUp({ email: email, password: password });
    if (res.status === 422) {
      const messages: string[] = res.data.messages;
      // NOTE:messagesの型はsignUpの定義元で定義すること

      messages.map((message) => {
        toastService({ message: message, type: 'dark' });
      });
    }
    if (res.status === 200) {
      setCookie('_access_token', res.headers['access-token'], { path: '/', secure: true });
      setCookie('_client', res.headers['client'], { path: '/', secure: true });
      setCookie('_uid', res.headers['uid'], { path: '/', secure: true });
      //TODO: navigateの設定は仮実装のため、後続の対応で変更
      setIsSignIn(true);
      navigate('/success');
    }
  };

  const login = async () => {
    const res = await signIn({ email: email, password: password });
    if (res.status === 200) {
      setCookie('_access_token', res.headers['access-token'], { path: '/', secure: true });
      setCookie('_client', res.headers['client'], { path: '/', secure: true });
      setCookie('_uid', res.headers['uid'], { path: '/', secure: true });
      setIsSignIn(true);
      navigate('/success');
    } else if (res.status === 401) {
      toastService({
        message:
          'ログインに問題がありました。メールアドレスとパスワードを確認するか、アカウントを作成してください。',
        type: 'dark',
      });
    }
  };

  return { inputEmail, inputPassword, register, login, emailErrorMessage };
};

export default useAuthentication;
