import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmailAuth from '../../../components/pages/auth/EmailAuth';

it('Should render hello text', () => {
  render(<EmailAuth />);
  screen.debug();
  expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
});
