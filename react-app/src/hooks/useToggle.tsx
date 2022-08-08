import { useCallback, useState } from 'react';

type Props = {
  defaultBool: boolean;
};

const defaultValues: Props = {
  defaultBool: true,
};

const useToggle = ({ defaultBool }: Props = defaultValues) => {
  const [state, setState] = useState<boolean>(defaultBool);
  const toggle = useCallback((): void => {
    setState(!state);
  }, [state]);

  return { state, toggle };
};

export default useToggle;
