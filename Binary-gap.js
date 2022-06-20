function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2).split('');

  let start = 0;
  let counting = false;

  return binary.reduce((maxSize, e, i) => {
    if (e === '1' && counting === false) {
      start = i;
      counting = true;
    }

    if (e === '1' && counting === true) {
      if (start === i - 1) {
        start = i;
        return maxSize;
      }
      let tempMaxSize = i - 1 - start;
      if (tempMaxSize > maxSize) {
        maxSize = tempMaxSize;
        start = i;
      }
      start = i;
    }
    return maxSize;
  }, 0);
}

console.log(solution(74901729));
