import { axiosInstance } from '../../axiosInstance';

type SignUp = { email: string; password: string };

type SignIn = { email: string; password: string };

export const signUp = (params: SignUp) => axiosInstance.post('/auth', params).catch(error => error.response);

export const signIn = (params: SignIn) => {
  return axiosInstance.post('auth/sign_in', params);
};
