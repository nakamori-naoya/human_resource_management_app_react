import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../../../lib/api/v1/auth';

const useAuthentication = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [_, setCookie] = useCookies(['_access_token', '_client', '_uid']);

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
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

  const register = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

      const res = await signUp({ email: email, password: password });
      console.log('react-app/src/components/pages/auth/hooks/useAuthentication.tsx', res);
      if (res.status === 422) {
        alert(res.data.messages[0]);
        // TODO: errorメッセージの表示はトーストで行うため、上記alertは仮実装
      }
      if (res.status === 200) {
        setCookie('_access_token', res.headers['access-token'], { path: '/', secure: true });
        setCookie('_client', res.headers['client'], { path: '/', secure: true });
        setCookie('_uid', res.headers['uid'], { path: '/', secure: true });
        //TODO: navigateの設定は仮実装のため、後続の対応で変更
        navigate('/success');
      }
  };

  const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const res = await signIn({ email: email, password: password });
      console.log('react-app/src/components/pages/auth/hooks/useAuthentication.tsx', res);
      if (res.status === 200) {
        setCookie('_access_token', res.headers['access-token'], { path: '/', secure: true });
        setCookie('_client', res.headers['client'], { path: '/', secure: true });
        setCookie('_uid', res.headers['uid'], { path: '/', secure: true });
      }
    } catch (err: unknown) {
      alert(err);
    }
  };

  return { inputEmail, inputPassword, register, login };
};

export default useAuthentication;
