import axios from 'axios';
const baseUrl = 'http://localhost:8001/api/v1/users';
export type User = {
  id: number;
  name: string;
  company: string;
};

export const fetchFacebookMembers = async (): Promise<User[]> => {
  const users = await axios.get(baseUrl).then((res) => res.data.data);

  return users;
};
