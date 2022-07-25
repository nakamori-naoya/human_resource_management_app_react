import { useQuery } from '@tanstack/react-query';
import { fetchMembers } from '../../../lib/private_app/members';
const MightThrowError = () => {
  const { data: users = [] } = useQuery(['members'], () => fetchMembers());

  if (new Date().getSeconds() % 2 === 0) {
    throw new Error('MightThrowError Component throw Error!!');
  }

  return (
    <>
      エンジニアメンバーは{users.length}人です。
      <p>safe!! not throw error!!</p>;
    </>
  );
};

export default MightThrowError;
