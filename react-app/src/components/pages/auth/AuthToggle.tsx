import React from 'react';
type Props = {
  label: string;
  toggleIsLogin: () => void;
};

const AuthToggle = React.memo(({ label, toggleIsLogin }: Props) => {
  console.log(label);

  return (
    <div className='mx-auto mt-3 max-w-max text-xs'>
      <button
        className='font-light text-blue-500 hover:text-indigo-900'
        onClick={() => toggleIsLogin()}
      >
        {label}
      </button>
    </div>
  );
});

export default AuthToggle;
