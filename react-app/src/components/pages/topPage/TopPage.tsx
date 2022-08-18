import React from 'react';
import useAuthentication from '../auth/hooks/useAuthentication';

const TopPage = () => {
  const { logOut } = useAuthentication();
  //NOTE: ログアウト機能は仮実装のため、後続の実装で変更

  return <button onClick={logOut}>success</button>;
};

export default TopPage;
