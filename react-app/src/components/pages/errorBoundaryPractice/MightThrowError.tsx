const MightThrowError = () => {
  if (new Date().getSeconds() % 2 === 0) {
    throw new Error('MightThrowError Component throw Error!!');
  }

  return <p>safe!! not throw error!!</p>;
};

export default MightThrowError;
