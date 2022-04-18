import { useState, Suspense, useTransition, useCallback } from "react";
import Spineer from "../../components/utils/Spinner";
import CacheSample from "../../components/CacheSample";
import MemberList from "../../components/MemberList";
import MemberProfile from "../../components/MemberProfile";
import NumberTextField from "../../components/Inputs/NumberTextField";

const ParentA = () => {
  const [isPending, startTransition] = useTransition();
  const [userId, setUserId] = useState<number>(0);
  const [userCacheId, setUserCacheId] = useState<number>(0);

  const inputUserCacheId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setUserCacheId(value);
    },
    []
  );

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
      <div>
        どのユーザーのプロファイルを確認したいですか？(キャッシュデータを返します)
      </div>
      <NumberTextField onChange={inputUserCacheId} rows={2} />
      <CacheSample id={userCacheId}></CacheSample>
    </>
  );
};

export default ParentA;
