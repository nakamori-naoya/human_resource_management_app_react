import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
      {/* resetErrorBoundaryは、呼び出されるとエラー境界の状態をリセット。
      おそらくErrorBoundaryの内側のコンポーネントを再レンダリングする */}
      <button type='button' onClick={resetErrorBoundary}>
        もう一度、実行する
      </button>
    </div>
  );
};
export default ErrorFallback;
