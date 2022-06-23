function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) {
    if (A[0] === 1) return 2;
    else return 1;
  }

  const maxInt = A.sort(function (a, b) {
    return a - b;
  })[A.length - 1];

  const set = new Set(A);

  for (let i = 1; i < A.length; i++) {
    if (!set.has(i)) return i;
    if ((maxInt <= 0) & (i === A.length - 1)) return 1;
    if (i === A.length - 1) return maxInt + 1;
  }
}

console.log(solution([1]));
