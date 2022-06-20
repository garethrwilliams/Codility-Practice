function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)

  const length = Y - X;
  return Math.ceil(length / D);
}

console.log(solution(10, 85, 30));
