function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort(function (a, b) {
    return a - b;
  });

  console.log('A:', A);

  return Math.max(
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3],
    A[A.length - 1] * A[0] * A[1]
  );
}

console.log(solution([-5, 5, -5, 4]));
