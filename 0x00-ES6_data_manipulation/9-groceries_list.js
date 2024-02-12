export default function groceriesList() {
  const finMap = new Map();
  const grocObj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const grocList = Array.from(Object.keys(grocObj));

  grocList.map((item) => finMap.set(item, grocObj[item]));
  return finMap;
}
