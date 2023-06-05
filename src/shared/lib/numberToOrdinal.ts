export function numberToOrdinal(number?: number) {
  switch (number) {
    case 1:
      return 'first';
    case 2:
      return 'second';
    case 3:
      return 'third';
    case 4:
      return 'fourth';
    case 5:
      return 'fifth';
    case 6:
      return 'sixth';
    case 7:
      return 'seventh';
    case 8:
      return 'eighth';
    case 9:
      return 'ninth';
    case 10:
      return 'tenth';
    default:
      return '';
  }
}
