import TextBox from '../../ui-elements/TextBox';
import { useCallback, useState } from 'react';

const EmailLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const inputEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  }, []);

  const inputPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  }, []);

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
      ></TextBox>
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
      ></TextBox>
      <div className='mt-6'></div>
      {isLogin ? (
        <>
          <button
            type='submit'
            className='rounded-4xl flex h-9 w-full justify-center border border-transparent bg-indigo-400 py-1  px-4  text-xl font-extrabold  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            ログイン
          </button>
          <div className='mx-auto mt-3 max-w-max text-xs'>
            <button
              className='font-light text-blue-500 hover:text-indigo-900'
              onClick={() => setIsLogin(false)}
            >
              まだアカウントをお持ちでない方はこちら
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            type='submit'
            className='rounded-4xl flex h-9 w-full justify-center border border-transparent bg-indigo-400 py-1  px-4  text-xl font-extrabold  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            アカウント作成
          </button>
          <div className='mx-auto mt-3 max-w-max text-xs'>
            <button
              className='font-light text-blue-500 hover:text-indigo-900'
              onClick={() => setIsLogin(true)}
            >
              ログインはこちらから
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default EmailLogin;
