import React, { useCallback, useState } from 'react';

const useAuthentication = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

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

  const toggleIsLogin = useCallback((): void => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return { inputEmail, inputPassword, toggleIsLogin, isLogin, password, email };
};

export default useAuthentication;
