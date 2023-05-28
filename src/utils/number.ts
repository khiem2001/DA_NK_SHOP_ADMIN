export const addZeroToFirst = (number: number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number + '';
};

export const convertFormatPriceToNumber = (number: string) => {
  const removedDot = (number + '').replace(/\./gm, '');
  return Number(removedDot || 0);
};
