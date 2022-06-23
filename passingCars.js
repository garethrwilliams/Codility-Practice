function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let x = 0;

  for (let i = 0; i < A.length; i++) {
    if (count > 1000000000) return -1;
    if (A[i] === 1) {
      count += 1 * x;
    }
    if (A[i] === 0) {
      x++;
    }
  }
  return count;
}

console.log(solution([0, 1, 0, 1, 1]));
