import { rest } from 'msw';

const shallowEqual = (objA: object, objB: object): boolean => {
  console.log({ objA, objB }, JSON.stringify(objA) === JSON.stringify(objB));

  return JSON.stringify(objA) === JSON.stringify(objB);
};

const VALID_PARAMS = {
  email: 'valid@example.com',
  password: 'validPassword',
};
const INVALID_EMAIL_FORMAT_PARAMS = {
  email: 'invalid.com',
  password: 'validPassword',
};
const EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS = {
  email: 'hasBeenTaken@example.com',
  password: 'validPassword',
};
const INVALID_PASSWORD_LESS_THAN_SIX_PARAMS = {
  email: 'valid@example.com',
  password: 'fifth',
};

const INVALID_PASSWORD_MORE_THAN_128_PARAMS = {
  email: 'valid@example.com',
  password:
    'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX',
};
export const mockedSignUpParams = () => {
  return {
    VALID_PARAMS,
    INVALID_EMAIL_FORMAT_PARAMS,
    EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS,
    INVALID_PASSWORD_LESS_THAN_SIX_PARAMS,
    INVALID_PASSWORD_MORE_THAN_128_PARAMS,
  };
};


export const mockedSignInParams = () => {
  return {
    VALID_PARAMS,
    INVALID_EMAIL_FORMAT_PARAMS,
    INVALID_PASSWORD_LESS_THAN_SIX_PARAMS,
  };
};

export const authHandlers = [
  rest.post('https://api.github.com/zen/api/v1/auth', (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };
    console.log({ email, password });

    if (shallowEqual({ email, password }, VALID_PARAMS)) {
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
    } else if (shallowEqual({ email, password }, INVALID_EMAIL_FORMAT_PARAMS)) {
      return res(
        ctx.status(422),
        ctx.json({
          type: 'invalid_request_error',
          messages: ['メールアドレスは有効ではありません'],
        }),
      );
    } else if (shallowEqual({ email, password }, EMAIL_HAS_BEEN_TAKEN_FORMAT_PARAMS)) {
      return res(
        ctx.status(422),
        ctx.json({
          type: 'invalid_request_error',
          messages: ['メールアドレスは既に使用されています'],
        }),
      );
    } else if (shallowEqual({ email, password }, INVALID_PASSWORD_LESS_THAN_SIX_PARAMS)) {
      return res(
        ctx.status(422),
        ctx.json({
          type: 'invalid_request_error',
          messages: ['パスワードは6文字以上です'],
        }),
      );
    } else if (shallowEqual({ email, password }, INVALID_PASSWORD_MORE_THAN_128_PARAMS)) {
      return res(
        ctx.status(422),
        ctx.json({
          type: 'invalid_request_error',
          messages: ['パスワードは128文字以内です'],
        }),
      );
    }
  }),

  rest.post('https://api.github.com/zen/api/v1/auth/signin', (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };
    console.log({ email, password });

    if (shallowEqual({ email, password }, VALID_PARAMS)) {
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
    } else if (shallowEqual({ email, password }, INVALID_EMAIL_FORMAT_PARAMS)) {
      return res(
        ctx.status(401),
        ctx.json({
          errors: ['ログイン用の認証情報が正しくありません。再度お試しください。'],
          success: false,
        }),
      );
    } else if (shallowEqual({ email, password }, INVALID_PASSWORD_LESS_THAN_SIX_PARAMS)) {
      return res(
        ctx.status(401),
        ctx.json({
          errors: ['ログイン用の認証情報が正しくありません。再度お試しください。'],
          success: false,
        }),
      );
    }

    return res(ctx.status(401), ctx.json({ data: {} }));
  }),
];
