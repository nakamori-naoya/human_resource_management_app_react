import TextBox from '../../ui-elements/TextBox';
import AuthButton from './AuthButton';
import AuthToggle from './AuthToggle';
import useAuthentication from './hooks/useAuthentication';
import useToggle from '../../../hooks/useToggle';

const EmailAuth = () => {
  const { inputEmail, inputPassword } = useAuthentication();
  const { state: isLogin, toggle: toggleIsLogin } = useToggle();

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
