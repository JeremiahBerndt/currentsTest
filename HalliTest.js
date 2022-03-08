// get the sum of 1-n squared
// I: array of numbers
// O: return sum of all numbers squared

const sumSquare = (arr) => {
  let squaredSum = 0;
  // iterate through arr
  for (let i = 0; i < arr.length; i++) {
    // for one item, square it, and add it to a final sum
    // let squared = arr[i]^2;
    squaredSum+=arr[i]^2;
  }
  // return final sum
  return squaredSum;
};
/*
Retaining the idea of the set of numbers, where X = {1…N}
Write a program to enumerate the numbers 1 through N and print “fizz” when the number is divisible by 3,
print “buzz” when it is divisible by 5 and “fizz buzz” when it is divisible by 3 and 5
*/

const fizzBuzz = (arr) => {
  let answer;
  for (let i = 0; i < arr.legnth; i++) {
    if (arr[i] % 3 === 0) {
      answer = 'fizz ';
    }
    if (arr[i] % 5 === 0) {
      answer += 'buzz';
    }
  }
  console.log(answer)
}