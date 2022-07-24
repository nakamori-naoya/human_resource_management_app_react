import { fetchMemberProfile } from '../../lib/private_app/members';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type Props = {
  userId: number;
};
const MemberProfile = ({ userId }: Props) => {
  const { data: user = { birthDay: 111, favoriteAnime: 'sample', favoriteMovie: 'dokka' } } =
    useQuery(['memberInfo', userId], () => fetchMemberProfile(userId));

  return (
    <>
      <div>{user.birthDay}</div>
      <div>{user.favoriteAnime}</div>
      <div>{user.favoriteMovie}</div>
    </>
  );
};

export default MemberProfile;
