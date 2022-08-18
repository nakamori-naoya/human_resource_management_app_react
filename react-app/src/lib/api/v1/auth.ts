import { axiosInstance } from '../../axiosInstance';

type SignUp = { email: string; password: string };

type SignIn = { email: string; password: string };
type SignOut = { 'access-token': string; client: string; uid: string };

export const signUp = (params: SignUp) => axiosInstance.post('/auth', params).catch(error => error.response);

export const signIn = (params: SignIn) =>
  axiosInstance.post('auth/sign_in', params).catch((error) => error.response);

  export const signOut = (params: SignOut) => {
    return axiosInstance
      .delete('auth/sign_out', { headers: params })
      .catch((error) => error.response);
  };
