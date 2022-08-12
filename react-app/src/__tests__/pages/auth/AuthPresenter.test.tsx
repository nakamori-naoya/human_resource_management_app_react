import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthPresenter from '../../../components/pages/auth/AuthPresenter';
import { setup } from '../../utils/useEvent';

jest.mock('axios');
describe('about sign up', () => {
  const { user, axios } = setup(<AuthPresenter />);
  beforeEach(async () => {
    screen.debug();
    expect(screen.getByText('アカウントをお持ちでない方はこちら')).toBeInTheDocument();
    await user.click(screen.getByText('アカウントをお持ちでない方はこちら'));
    expect(screen.getByText('ログインの方はこちら')).toBeInTheDocument();
  });

  it('when success', async () => {
    user.type(screen.getByLabelText('メールアドレス'), 'example@gmail.com');
    user.type(screen.getByLabelText('パスワード'), '12345678');
    user.click(screen.getByText('新規登録'));
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { email: 'example@gmail', password: '12345678' } }),
    );
  });
});
