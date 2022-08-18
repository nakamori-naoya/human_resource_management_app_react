import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSignIn } from '../store/hooks/auth';

type Props = {
  component: ReactNode;
  redirect: string;
};
const RouteAuthGuard: FC<Props> = ({ component, redirect }) => {
  const { isSignIn } = useSignIn();

  return isSignIn ? (
    <>{component}</>
  ) : (
    <Navigate to={redirect} state={{ from: useLocation() }} replace={false} />
  );
};

export default RouteAuthGuard;
