import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import MightThrowError from './MightThrowError';
import Spineer from '../../ui-elements/Spinner';
import { Suspense } from 'react';

const ErrorBoundaryPractice = () => {
  const onError = (error: Error, info: { componentStack: string }) => {
    console.log('error.message', error.message); // throwされたエラーが入る。今回で言えば、'MightThrowError Component throw Error!!'
    console.log('info.componentStack:', info.componentStack); //componentStackには、エラーをthrowしたcomponentのチェーン(当該コンポーネントと親コンポーネント群)が出力される
  };

  return (
    // onErrorには、エラーが発生した時に呼ばれる関数をコールバック関数として渡す
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      <Suspense fallback={<Spineer />}>
        <span>ErrorBoundaryPractice</span>
        <MightThrowError />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryPractice;
