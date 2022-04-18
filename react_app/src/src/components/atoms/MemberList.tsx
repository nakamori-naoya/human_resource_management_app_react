import { useQuery } from 'react-query';
import { fetchMembers } from '../../lib/private_app/members';

const MemberList = () => {
  const { data: users = [{ id: 111, name: 'sample', company: 'dokka' }] } = useQuery(
    'facebookMembers',
    () => fetchMembers(),
  );

  return (
    <div>
      エンジニアメンバーは{users.length}人です。
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.company}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberList;
