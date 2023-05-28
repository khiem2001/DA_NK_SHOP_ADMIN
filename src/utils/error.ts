import Notification from '@/components/Notification';

export const translatedError: any = {
  '2 UNKNOWN: Account not exist': 'Số điện thoại hoặc mật khẩu không chính xác',
  '2 UNKNOWN: Wrong password': 'Số điện thoại hoặc mật khẩu không chính xác',
  '2 UNKNOWN: Please verify your phone number': 'Vui lòng xác minh số điện thoại',
  'jwt malformed': 'Vui lòng thử lại',
  'Your passwords do not match': 'Mật khẩu cũ không chính xác',
  'Account exist!': 'Tài khoản đã tồn tại'
};

export const getErrorMessage = (error: any) => {
  const response = error.response;
  const code = response?.errors[0]?.message;
  return translatedError?.[code] || code || 'Đã xảy ra lỗi, vui lòng thử lại sau';
};

export const showErrorMessage = (error: any) => {
  const errorMessage = getErrorMessage(error).replace('2 UNKNOWN: ', '');
  Notification.Error(errorMessage);
};
