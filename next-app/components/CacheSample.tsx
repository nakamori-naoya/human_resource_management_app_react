import React from "react";
import { UserInfo } from "../lib/private_app/members";
import { queryClient } from "../pages/_app";

type Props = {
  id: number;
};
const CacheSample = ({ id }: Props) => {
  const data: UserInfo | undefined = queryClient.getQueryData([
    "userProfile",
    id,
  ]);

  if (data === undefined) {
    return <></>;
  }

  return (
    <>
      <div>{data.birthDay}</div>
      <div>{data.favoriteAnime}</div>
      <div>{data.favoriteMovie}</div>
    </>
  );
};

export default CacheSample;
