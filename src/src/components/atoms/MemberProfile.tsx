import React from 'react';
import { useQuery } from 'react-query';
import { fetchMemberProfile } from '../../lib/private_app/members';

type Props = {
  userId: number;
};
const MemberProfile = ({ userId }: Props) => {
  const { data: user = { birthDay: 111, favoriteAnime: 'sample', favoriteMovie: 'dokka' } } =
    useQuery('memberInfo', () => fetchMemberProfile(userId));

  return (
    <>
      <div>{user.birthDay}</div>
      <div>{user.favoriteAnime}</div>
      <div>{user.favoriteMovie}</div>
    </>
  );
};

export default MemberProfile;
