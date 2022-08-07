import EmailAuth from './EmailAuth';
import OAuthLogin from './OAuthLogin';
const Auth = () => {
  return (
    <div className='w-112 h-112 rounded-4xl mx-auto  mt-12 border shadow-md'>
      <div className='m-auto mt-10 block w-80'>
        <EmailAuth />
        <div className='mx-auto my-6 w-12'>または</div>
        <OAuthLogin />
      </div>
    </div>
  );
};

export default Auth;
