import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthPresenter from '../../../components/pages/auth/AuthPresenter';
import { setupUserEvent } from '../../utils/userEvent';
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

describe('about sign up', () => {
  const { user } = setupUserEvent();

  beforeEach(async () => {
    render(<AuthPresenter />);
    expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
    await user.click(screen.getByText('アカウントをお持ちでない方はこちら'));
    expect(screen.getByText('ログインの方はこちら')).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
  it('when email format is inValid', async () => {
    await user.type(screen.getByLabelText('メールアドレス'), 'examplegmail.com');
    screen.debug();
    expect(await screen.findByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
  });

  it('when success', async () => {
    await user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
    await user.type(screen.getByLabelText('パスワード'), '12345678');
    await user.click(screen.getByText('新規登録'));
    expect(mockedNavigator).toHaveBeenCalledWith('/success');
  });

  it('when fails', async () => {
    await user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
    await user.type(screen.getByLabelText('パスワード'), '12345678');
    await user.click(screen.getByText('新規登録'));
  });
});

// const { user } = setupUserEvent();

// beforeEach(async () => {
//   render(<AuthPresenter />);
//   expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
//   await user.click(screen.getByText('アカウントをお持ちでない方はこちら'));
//   expect(screen.getByText('ログインの方はこちら')).toBeInTheDocument();
// });

// afterEach(() => {
//   cleanup();
// });
// it('when email format is inValid', async () => {
//   await user.type(screen.getByLabelText('メールアドレス'), 'examplegmail.com');
//   screen.debug();
//   expect(await screen.findByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
// });

// it('when success', async () => {
//   await user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
//   await user.type(screen.getByLabelText('パスワード'), '12345678');
//   await user.click(screen.getByText('新規登録'));
// });

// it('when fails', async () => {
//   await user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
//   await user.type(screen.getByLabelText('パスワード'), '12345678');
//   await user.click(screen.getByText('新規登録'));
// });
