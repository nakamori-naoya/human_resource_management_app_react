import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
      {/* resetErrorBoundary:
      呼び出されるとエラー境界の状態をリセットする。
      おそらくErrorBoundaryの内側のコンポーネントを再レンダリングする
      ユースケースとしては、時間が解決する場合、つまり再度実行すればうまくいく場合に効果的 */}
      <button type='button' onClick={resetErrorBoundary}>
        もう一度、実行する
      </button>
    </div>
  );
};
export default ErrorFallback;
