import { useQuery } from 'react-query';
import { fetchFacebookMembers } from '../lib/github_api/facebook';

const Sample1 = () => {
  const { data: users = [{ id: 111, name: 'sample', company: 'dokka' }] } = useQuery(
    'facebookMembers',
    () => fetchFacebookMembers(),
  );
  console.log(users, 11111);

  return (
    <div>
      エンジニアメンバーは{users.length}人です。
      <div>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.company}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sample1;
