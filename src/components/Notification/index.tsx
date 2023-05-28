import { toast, ToastOptions } from 'react-toastify';
import { pixel2fontSize } from '../../utils/pixel2fontSize';

export const ToastDefaultConfig = (): ToastOptions => {
  return {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: 'linear-gradient(to right, #58c6f8, #ff5555)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#000000',
      borderRadius: '20px',
      margin: 10,
      fontSize: pixel2fontSize(15),
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center'
    }
  };
};

export const Error = (message: string) => {
  console.log(message);
  toast.error(message, ToastDefaultConfig());
};

export const Success = (message: string) => {
  toast.success(message, ToastDefaultConfig());
};

export const Info = (message: string) => {
  toast.info(message, ToastDefaultConfig());
};

export default {
  Error,
  Success,
  Info
};
