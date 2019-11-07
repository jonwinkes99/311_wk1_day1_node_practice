const isEven = (num) => {
  if(num%2==0){
    return true;
  }else {
    return false
  }
}
const sum = arr => {
  let total = arr.reduce((a, b) => a + b);
  return total;
};
const comboSum = (arr, sum) => {
  let total = arr.reduce((a, b) => a + b);
  return total === sum;
}

// const comboSum1 = (arr, sum) => {
//   let total = arr.reduce((a, b) => a + b);
//   return total === sum
//   }
  
//   let test = [1,2,3,8,21]
  
//   console.log(comboSum1(test,10))

module.exports = {
  isEven,
  sum,
  comboSum
}