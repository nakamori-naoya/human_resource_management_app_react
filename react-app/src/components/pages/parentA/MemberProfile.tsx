import { useQuery } from '@tanstack/react-query';
import { fetchMemberProfile } from '../../../lib/private_app/members';

type Props = {
  userId: number;
};
const MemberProfile = ({ userId }: Props) => {
  const { data: user = { birthDay: null, favoriteAnime: null, favoriteMovie: null } } = useQuery(
    ['memberInfo', userId],
    () => fetchMemberProfile(userId),
  );

  return (
    <>
      <div>{user.birthDay}</div>
      <div>{user.favoriteAnime}</div>
      <div>{user.favoriteMovie}</div>
    </>
  );
};

export default MemberProfile;
