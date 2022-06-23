function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const returnArray = [];

  for (let i = 0; i < P.length; i++) {
    // Remove shallow slice
    const slice = S.substring(P[i], Q[i] + 1);

    if (slice.indexOf('A') !== -1) {
      returnArray.push(1);
    } else if (slice.indexOf('C') !== -1) {
      returnArray.push(2);
    } else if (slice.indexOf('G') !== -1) {
      returnArray.push(3);
    } else {
      returnArray.push(4);
    }
  }

  return returnArray;
}

const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];

console.log(solution(S, P, Q));
