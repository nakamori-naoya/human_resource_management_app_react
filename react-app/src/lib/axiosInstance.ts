import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const options = {
  ignoreHeaders: true,
};


// NOTE: test環境では、applyCaseMiddlewareが動かないため、条件分岐を行なっている
// test環境では、axiosはMockを使い、レスポンスの制御を行なっているので、問題ないと思われる
export const axiosInstance =
  process.env.NODE_ENV === 'test'
    ? axios.create({
        baseURL: 'http://localhost:9001/api/v1',
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 2000,
      })
    : applyCaseMiddleware(
        axios.create({
          baseURL: 'http://localhost:9001/api/v1',
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 2000,
        }),
        options,
      );

