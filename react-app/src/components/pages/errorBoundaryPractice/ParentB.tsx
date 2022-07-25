import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import MightThrowError from './MightThrowError';

export const ParentB = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <span>ParentB</span>
      <MightThrowError />
    </ErrorBoundary>
  );
};
