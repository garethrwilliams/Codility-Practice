function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const counter = new Array(N).fill(0);
  let highInt = 0;

  for (let x = 0; x < A.length; x++) {
    if (x <= N) {
      counter[x - 1]++;
      if (counter[x - 1] > highInt) {
        highInt = counter[x - 1];
      }
    }

    if (x === N + 1) {
      counter.fill(highInt);
    }
  }

  return counter;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
