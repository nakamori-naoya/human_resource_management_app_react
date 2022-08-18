import { atom, useRecoilState } from 'recoil';

const signInUserState = atom({
  key: 'react-app/src/store/auth/auth.ts',
  default: false,
});

export const useSignIn = () => {
  const [isSignIn, setIsSignIn] = useRecoilState(signInUserState);

  return { isSignIn, setIsSignIn };
};
