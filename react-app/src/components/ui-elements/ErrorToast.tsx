import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToast = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  );
};

export default ErrorToast;
