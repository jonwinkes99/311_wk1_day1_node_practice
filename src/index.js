const split = (str, delim) => {
  let test = str.split(delim);
  return test;
};
const pairs = (str) => {
  let pairs = [];
  let arrayed = str.split('');
    for (let i = 0; i < arrayed.length; i = i + 2){
      pairs.push(arrayed[i].concat(arrayed[i+1]));
    }
  return pairs;
}
const reverse = (str) => {
  let arr = str.split('');
  let rvrsd = arr.reverse();
  return rvrsd.join('');
}
module.exports = {
  split,
  pairs,
  reverse
}