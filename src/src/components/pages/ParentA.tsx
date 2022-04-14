import MemberProfile from '../atoms/MemberProfile';
import MemberList from '../atoms/MemberList';
import Spineer from '../atoms/Spinner';
import { useState, Suspense, useTransition } from 'react';

const ParentA = () => {
  const [isPending, startTransition] = useTransition();
  const [userId, setUserId] = useState<number>(0);

  return (
    <Suspense fallback={<div>ちとお待ちを</div>}>
      <Suspense fallback={<Spineer />}>
        <MemberList />
      </Suspense>
      <div style={isPending ? { opacity: 0.5 } : undefined}>
        <Suspense fallback={<Spineer />}>
          <MemberProfile userId={userId} />
        </Suspense>
      </div>
      <button
        onClick={() =>
          startTransition(() => {
            setUserId((uid) => uid + 1);
          })
        }
        disabled={isPending}
      >
        次のユーザーのプロフィールを取得
      </button>
    </Suspense>
  );
};

export default ParentA;
