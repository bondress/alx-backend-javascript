/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let res = true;
  list.map((x) => {
    if (!set.has(x)) {
      res = false;
    }
  });
