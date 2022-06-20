function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const returnArray = [...A];

  for (let x = 0; x < K; x++) {
    let lastIndex = returnArray.pop();
    returnArray.unshift(lastIndex);
  }

  return returnArray;
}

console.log(solution([1, 2, 3, 4], 2));
