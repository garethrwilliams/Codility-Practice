// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   let minDiff = 0;

//   A.forEach((e, i, arr) => {
//     if (i > 0 && i < arr.length) {
//       const arr2 = [...arr];
//       arr = arr2.splice(0, i);

//       const arrSum = arr.reduce((pv, cv) => pv + cv, 0);
//       const arr2Sum = arr2.reduce((pv, cv) => pv + cv, 0);

//       tempMin = Math.abs(arrSum - arr2Sum);

//       if (i === 1) {
//         minDiff = tempMin;
//       } else if (tempMin < minDiff) {
//         minDiff = tempMin;
//       }
//     }
//   });

//
//   return minDiff;
// }

function solution(A) {
  const length = A.length;
  let min = Number.MAX_SAFE_INTEGER;
  let total = 0;
  let count = 0;

  for (let i = 0; i < length; i++) total += A[i];

  for (let i = 0; i < length; i++) {
    count += A[i];
    let arr1 = count,
      arr2 = total - arr1;
    let diff = Math.abs(arr1 - arr2);

    if (diff < min) min = diff;
  }

  return min;
}

console.log(solution([3, 1]));
