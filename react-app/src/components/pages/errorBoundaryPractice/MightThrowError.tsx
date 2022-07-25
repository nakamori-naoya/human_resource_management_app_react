import { useQuery } from '@tanstack/react-query';
import { fetchMembers } from '../../../lib/private_app/members';
const MightThrowError = () => {
  const { data: users = [] } = useQuery(['members'], fetchMembers);

  return (
    <>
      エンジニアメンバーは{users.length}人です。
      <p>safe!! not throw error!!</p>
    </>
  );
};

export default MightThrowError;
