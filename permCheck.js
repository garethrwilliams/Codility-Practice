// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const fullHouse = {};

//   for (let x in A) {
//     fullHouse[A[x]] = 1;
//   }

//   if (Object.keys(fullHouse).length < 1) return 0;

//   for (let x = 1; x <= Object.keys(fullHouse).length; x++) {
//     if (fullHouse[x] === undefined) return 0;
//   }

//   return 1;
// }

function solution(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (i = 0; i < arr.length; i++) {
    if (!(arr[i] === i + 1)) return 0;
  }
  return 1;
}

console.log(solution([1, 1]));
