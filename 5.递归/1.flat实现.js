function flat(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}
console.log(flat([12, 23, [34, [45]]]))
