function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  //   let count = 0;

  //   for (let x = A; x <= B; x++) {
  //     if (x % K === 0) count++;
  //   }

  //   return count;

  let first, last;
  const zeroStart = !A ? 1 : 0;

  if (K > B || B < A) return 0 + zeroStart;

  while (!first) {
    first = !(A % K) ? A : undefined;
    A++;
  }

  while (!last) {
    last = !(B % K) ? B : undefined;
    B--;
  }

  return (last - first) / K + 1 + zeroStart;
}

console.log(solution(0, 1, 11));
