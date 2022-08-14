import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthPresenter from '../../../components/pages/auth/AuthPresenter';
import { setup } from '../../utils/userEvent';
import { mockedAxios as axios } from '../../utils/mockedAxios';
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

describe('about sign up', () => {
  axios.post.mockImplementationOnce(() =>
    Promise.resolve({ 'access-token': 'access-token', client: 'client', uid: 'uid' }),
  );
  const { user } = setup(<AuthPresenter />);
  beforeEach(async () => {
    expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
    await user.click(screen.getByText('アカウントをお持ちでない方はこちら'));
    expect(screen.getByText('ログインの方はこちら')).toBeInTheDocument();
  });

  it('when success', async () => {
    user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
    user.type(screen.getByLabelText('パスワード'), '12345678');
    await user.click(screen.getByText('新規登録'));
  });
});
