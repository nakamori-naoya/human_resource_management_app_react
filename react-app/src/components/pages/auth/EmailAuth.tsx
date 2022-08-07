import TextBox from '../../ui-elements/TextBox';
import { useCallback, useState } from 'react';
import AuthButton from './AuthButton';
import AuthToggle from './AuthToggle';

const EmailAuth = () => {
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

  return (
    <>
      <TextBox
        id='email-address'
        label='メールアドレス'
        placeholder='メールアドレス'
        name='email'
        autoComplete='email'
        required={true}
        type='email'
        text={email}
        setText={inputEmail}
      />
      <div className=' my-6' />
      <TextBox
        id='password'
        label='パスワード'
        placeholder='パスワード'
        name='password'
        autoComplete='password'
        required={true}
        type='password'
        text={password}
        setText={inputPassword}
      />
      <div className='mt-6' />
      {isLogin ? (
        <>
          <AuthButton label='ログイン' />
          <AuthToggle label='アカウントをお持ちでない方はこちら' toggleIsLogin={toggleIsLogin} />
        </>
      ) : (
        <>
          <AuthButton label='新規登録' />
          <AuthToggle label='ログインの方はこちら' toggleIsLogin={toggleIsLogin} />
        </>
      )}
    </>
  );
};

export default EmailAuth;
