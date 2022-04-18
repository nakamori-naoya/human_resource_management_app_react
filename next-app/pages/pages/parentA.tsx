import { useState, Suspense, useTransition } from "react";
import MemberList from "../../components/utils/MemberList";
import MemberProfile from "../../components/utils/MemberProfile";
import Spineer from "../../components/utils/Spinner";

const ParentA = () => {
  const [isPending, startTransition] = useTransition();
  const [userId, setUserId] = useState<number>(0);

  return (
    <>
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
    </>
  );
};

export default ParentA;
