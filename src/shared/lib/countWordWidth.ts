export function countWordWidth(str: string) {
  let sum = 0;
  str.split('').forEach((char) => {
    if (!char.trim()) sum += 6.5;
    else sum += 14;
  });
  return sum;
}
