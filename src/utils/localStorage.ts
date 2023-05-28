export const MyLocalStorage = (): {
  getItem: (key: string) => any;
  removeItem: (key: string) => any;
  setItem: (key: any, value: any) => any;
  clear: () => any;
} => {
  if (typeof window !== 'undefined') {
    return window.localStorage as any;
  }
  return {
    getItem: (key: string) => null,
    setItem: (key: any, value: any) => null,
    clear: () => {},
    removeItem: (key: string) => null
  };
};
