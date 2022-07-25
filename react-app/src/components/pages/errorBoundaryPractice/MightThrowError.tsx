import React from 'react';

const MightThrowError = () => {
  if (new Date().getMilliseconds() % 2 === 0) {
    throw new Error('Page3Child Throw Error');
  }

  return <p>not throw error</p>;
};

export default MightThrowError;
