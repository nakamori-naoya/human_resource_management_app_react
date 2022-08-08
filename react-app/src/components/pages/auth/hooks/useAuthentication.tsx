import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { signIn, signUp } from '../../../../lib/api/v1/auth';

const useAuthentication = () => {
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
    try {
      const res = await signUp({ email: email, password: password });
      console.log('react-app/src/components/pages/auth/hooks/useAuthentication.tsx', res);
      if (res.status === 422) return alert('すでに登録されています');
      if (res.status === 200) {
        setCookie('_access_token', res.headers['access-token'], { path: '/', secure: true });
        setCookie('_client', res.headers['client'], { path: '/', secure: true });
        setCookie('_uid', res.headers['uid'], { path: '/', secure: true });
      }
    } catch (err: unknown) {
      alert(err);
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
