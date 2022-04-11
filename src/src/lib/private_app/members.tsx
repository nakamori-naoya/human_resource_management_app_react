import axios from 'axios';
const baseUrl = 'http://localhost:8001/api/v1/';
export type User = {
  id: number;
  name: string;
  company: string;
};

export type UserInfo = {
  birth_day: string;
  favoriteAnime: string;
  favoriteMovie: string;
};

export const fetchMembers = async (): Promise<User[]> => {
  const users = await axios.get(baseUrl + 'users').then((res) => res.data.data);

  return users;
};

export const fetchMemberInfo = async (): Promise<UserInfo> => {
  const user = await axios.get(baseUrl + 'user').then((res) => res.data.data);

  return user;
};
