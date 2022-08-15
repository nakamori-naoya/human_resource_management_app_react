import { rest } from 'msw';
export const handlers = [
  rest.post('https://api.github.com/zen/api/v1/auth', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        headers: {
          'access-token': 'access-token',
          client: 'client',
          uid: 'uid',
        },
      }),
    );
  }),
];
