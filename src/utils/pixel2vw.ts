export function pixel2vw(measure: number, base = 960) {
  const ratio = measure / base;
  return `max(${ratio * 100}vw,${ratio * 960}px)`;
}
