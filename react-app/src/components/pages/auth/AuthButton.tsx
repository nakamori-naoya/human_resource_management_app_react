import React from 'react';

type Props = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
};

const AuthButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type='submit'
      className='rounded-4xl flex h-9 w-full justify-center border border-transparent bg-indigo-400 py-1  px-4  text-xl font-extrabold  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      {label}
    </button>
  );
};

export default AuthButton;
