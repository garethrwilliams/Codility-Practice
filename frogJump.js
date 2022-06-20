function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const found = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      found.add(A[i]);
      if (found.size === X) {
        return i;
      }
    }
  }
  return -1;
}

console.log(solution(5, [3]));
