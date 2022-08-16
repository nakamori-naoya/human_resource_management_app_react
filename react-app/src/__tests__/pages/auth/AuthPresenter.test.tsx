import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthPresenter from '../../../components/pages/auth/AuthPresenter';
import { setupUserEvent } from '../../utils/userEvent';
import { mockedSignUpParams } from '../../../mocks/auth';
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));
import { ToastContainer } from 'react-toastify';
import { ReactNode } from 'react';

export const renderWithToastify = (component: ReactNode) => {
  return render(
    <div>
      <ToastContainer />
      {component}
    </div>,
  );
};

describe('about sign up', () => {
  const { user } = setupUserEvent();
  const {
    VALID_PARAMS,
    INVALID_EMAIL_FORMAT_PARAMS,
    EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS,
    INVALID_PASSWORD_LESS_THAN_SIX_PARAMS,
    INVALID_PASSWORD_MORE_THAN_128_PARAMS,
  } = mockedSignUpParams();

  beforeEach(async () => {
    renderWithToastify(<AuthPresenter />);
    expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
    await user.click(screen.getByText('アカウントをお持ちでない方はこちら'));
    expect(screen.getByText('ログインの方はこちら')).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });

  it('when success', async () => {
    await user.type(screen.getByLabelText('メールアドレス'), VALID_PARAMS.email);
    await user.type(screen.getByLabelText('パスワード'), VALID_PARAMS.password);
    await user.click(screen.getByText('新規登録'));
    screen.debug();
    expect(mockedNavigator).toHaveBeenCalledWith('/success');
  });

  describe('when fails', () => {
    it('when email has been taken', async () => {
      await user.type(screen.getByLabelText('メールアドレス'), INVALID_EMAIL_FORMAT_PARAMS.email);
      await user.type(screen.getByLabelText('パスワード'), INVALID_EMAIL_FORMAT_PARAMS.password);
      expect(await screen.findByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
      await user.click(screen.getByText('新規登録'));
      expect(await screen.findByText('メールアドレスは有効ではありません')).toBeInTheDocument();
    });
    it('when email has been taken', async () => {
      await user.type(
        screen.getByLabelText('メールアドレス'),
        EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS.email,
      );
      await user.type(
        screen.getByLabelText('パスワード'),
        EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS.password,
      );
      await user.click(screen.getByText('新規登録'));
      await screen.findByText('メールアドレスは既に使用されています');
    });
    it('when password is less than six', async () => {
      await user.type(
        screen.getByLabelText('メールアドレス'),
        INVALID_PASSWORD_LESS_THAN_SIX_PARAMS.email,
      );
      await user.type(
        screen.getByLabelText('パスワード'),
        INVALID_PASSWORD_LESS_THAN_SIX_PARAMS.password,
      );
      await user.click(screen.getByText('新規登録'));
      expect(await screen.findByText('パスワードは6文字以上です')).toBeInTheDocument();
    });
    it('when password is more than 128', async () => {
      await user.type(
        screen.getByLabelText('メールアドレス'),
        INVALID_PASSWORD_MORE_THAN_128_PARAMS.email,
      );
      await user.type(
        screen.getByLabelText('パスワード'),
        INVALID_PASSWORD_MORE_THAN_128_PARAMS.password,
      );
      await user.click(screen.getByText('新規登録'));
      expect(await screen.findByText('パスワードは128文字以内です')).toBeInTheDocument();
    });
  });
});
