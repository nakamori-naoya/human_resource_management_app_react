import { ErrorInfo, PureComponent, ReactNode } from 'react';

type StatusMessages = { [status: number]: string };
type Props = { children: ReactNode; statusMessages?: StatusMessages };
type State = { hasError: boolean; error: Error | null };
const DEFAULT_MESSAGES: StatusMessages = { 0: 'サーバエラーです' };

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    console.error(error, info);
  };

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props;
    const { hasError, error } = this.state;
    const messages = { ...DEFAULT_MESSAGES, ...statusMessages };
    console.log({ error, children });
    if (hasError) {
      console.log(error);

      return <div>{messages[0]}</div>;
    }

    return children;
  };
}

export default ErrorBoundary;
