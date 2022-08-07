import TextBox from '../../ui-elements/TextBox';
import { useState } from 'react';

const EmailLogin = () => {
  return (
    <>
      <TextBox
        id='email-address'
        label='メールアドレス'
        placeholder='メールアドレス'
        name='email'
        autoComplete='email'
        required={true}
        type='email'
      ></TextBox>
      <div className=' my-6' />
      <TextBox
        id='password'
        label='パスワード'
        placeholder='パスワード'
        name='password'
        autoComplete='password'
        required={true}
        type='password'
      ></TextBox>
      <div className='mt-6'>
        <button
          type='submit'
          className='rounded-4xl flex h-9 w-full justify-center border border-transparent bg-indigo-400 py-1  px-4  text-xl font-extrabold  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          ログイン
        </button>
      </div>
      <div className='mx-auto mt-3 w-60 text-xs'>
        <button className='font-light text-blue-500 hover:text-indigo-900'>
          まだアカウントをお持ちでない方はこちら
        </button>
      </div>
    </>
  );
};

export default EmailLogin;
