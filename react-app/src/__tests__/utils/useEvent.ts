import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import axios from 'axios';

export const setup = (jsx: JSX.Element) => {
  jest.mock('axios');
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  return {
    user: userEvent.setup(),
    axios: mockedAxios,
    ...render(jsx),
  };
};
