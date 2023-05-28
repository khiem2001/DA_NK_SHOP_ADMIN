export function randomText(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const convertFormattedPriceToNumber = (formattedPrice: string) => {
  return (formattedPrice || '')?.trim().replace(/(\.)/g, '');
};

export const hidePartOfPhoneNumber = (phoneNumber?: any) => {
  if (!phoneNumber) {
    return null;
  }
  return phoneNumber?.slice(0, 7) + '***';
};
export const formatPrice = (price: any) => {
  const formatter = new Intl.NumberFormat('vi-VN');
  return formatter.format(parseInt(price, 10));
};
