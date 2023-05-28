/* eslint-disable @typescript-eslint/no-unused-vars */

export function pixel2fontSize(measure: number, base = 960) {
  return `${measure / 16}rem`;
  // return `calc(${(4 * measure * 0.9) / 3}px + ${((measure * 0.1) / base) * 100}vw)`;
  // return pixel2vw(measure);
}
