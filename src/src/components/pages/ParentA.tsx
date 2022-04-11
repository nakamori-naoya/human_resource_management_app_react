import { Suspense } from 'react';
import { startTransition, useTransition } from 'react-transition-group/node_modules/@types/react';
import MemberList from '../atoms/MemberList';
import Spineer from '../atoms/Spinner';

const ParentA = () => {
  return (
    <SuspenseList revealOrder='forwards'>
      <Suspense fallback={<Spineer />}>
        <MemberList />
      </Suspense>
    </SuspenseList>
  );
};

export default ParentA;
