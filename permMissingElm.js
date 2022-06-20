function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sortedArr = A.sort();
  let i = 0;
  let start = sortedArr[0];
  const end = sortedArr[sortedArr - 1];

  while (i < sortedArr.length) {
    if (sortedArr[i] !== start) return start;

    start++;
    i++;
  }
}

console.log(solution([2, 4]));
