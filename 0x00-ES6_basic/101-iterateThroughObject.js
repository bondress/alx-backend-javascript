/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let res = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    res += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      res += ' | ';
    }
  }

  return res;
}
