import axios from 'axios';
const baseUrl = 'http://localhost:8001/api/v1/';
export type User = {
  id: number;
  name: string;
  company: string;
};

export type UserInfo = {
  birthDay: string;
  favoriteAnime: string;
  favoriteMovie: string;
};

export const fetchMembers = async (): Promise<User[]> => {
  const users = await axios.get(baseUrl + 'users').then((res) => res.data.data);

  return users;
};

export const fetchMemberProfile = async (userId: number): Promise<UserInfo> => {
  console.log(userId);
  const user = await axios.get(baseUrl + `users/${userId}`).then((res) => res.data.data);
  console.log(user);

  return user;
};
