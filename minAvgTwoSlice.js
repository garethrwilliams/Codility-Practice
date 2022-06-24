/*
A better way of doing it (more efficient) is to just check for slices that are 2 or 3 indexes in length aas mathematically these will produce
the lowest avg and a O(n + m) complexity
*/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = Number.MAX_SAFE_INTEGER;
  let index;

  function findAvg(A, P, Q) {
    let sum = 0;
    for (let i = P; i <= Q; i++) {
      sum += A[i];
    }
    return sum / (Q - P + 1);
  }

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let x = findAvg(A, i, j);
      if (x < min) {
        min = x;
        index = i;
      }
    }
  }

  return index;
}
// [4, 2, 2, 5, 1, 5, 8]
console.log(solution([4, 2, 2, 5, 1, 5, 8]));
