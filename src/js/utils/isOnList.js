export function isOnList(list = [], value) {
  const isOnList = list.findIndex(item => item.name === value);

  return isOnList !== -1;
}
