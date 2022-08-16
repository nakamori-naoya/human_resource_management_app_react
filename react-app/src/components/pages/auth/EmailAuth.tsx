import TextBox from '../../ui-elements/TextBox';
import AuthButton from './AuthButton';
import AuthToggle from './AuthToggle';
import useAuthentication from './hooks/useAuthentication';
import useToggle from '../../../hooks/useToggle';

const EmailAuth = () => {
  const { inputEmail, inputPassword, register, login, emailErrorMessage } = useAuthentication();
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
        errorMessage={emailErrorMessage}
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
          <AuthButton label='ログイン' onClick={login} />
          <AuthToggle label='アカウントをお持ちでない方はこちら' toggleIsLogin={toggleIsLogin} />
        </>
      ) : (
        <>
          <AuthButton label='新規登録' onClick={register} />
          <AuthToggle label='ログインの方はこちら' toggleIsLogin={toggleIsLogin} />
        </>
      )}
    </>
  );
};

export default EmailAuth;
