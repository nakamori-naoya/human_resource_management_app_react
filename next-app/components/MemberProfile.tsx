import React from "react";
import { useQuery } from "react-query";
import { fetchMemberProfile } from "../lib/private_app/members";

type Props = {
  userId: number;
};
const MemberProfile = ({ userId }: Props) => {
  const {
    data: user = {
      birthDay: null,
      favoriteAnime: "",
      favoriteMovie: "",
    },
  } = useQuery(["userProfile", userId], () => fetchMemberProfile(userId));

  return (
    <>
      <div>{user.birthDay}</div>
      <div>{user.favoriteAnime}</div>
      <div>{user.favoriteMovie}</div>
    </>
  );
};

export default MemberProfile;
