import { toast } from 'react-toastify';

type toastType = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'dark';
};

export const toastService = ({ message, type = 'success' }: toastType) => {
  toast[type](message, {
    icon: '😢',
    position: 'top-right',
    autoClose: 8000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: message,
    style: { fontSize: '14px' },
  });
};
