export const isBrowser = typeof window !== 'undefined';
export const getCurrentHost = () => {
  if (isBrowser) {
    return window?.location?.origin;
  }
  return '';
};
