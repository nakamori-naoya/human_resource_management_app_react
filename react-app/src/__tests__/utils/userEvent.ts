import userEvent from '@testing-library/user-event';

export const setupUserEvent = () => {
  return {
    user: userEvent.setup(),
  };
};
