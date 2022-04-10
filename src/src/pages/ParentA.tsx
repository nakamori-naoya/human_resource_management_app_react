import { Suspense } from 'react';
import Spineer from '../atoms/Spinner';
import Sample1 from '../components/Sample1';

const ParentA = () => {
  return (
    <Suspense fallback={<Spineer />}>
      <Sample1 />
    </Suspense>
  );
};

export default ParentA;
