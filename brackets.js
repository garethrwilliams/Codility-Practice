function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let index = 0;
  const stack = [];
  const closingBrackets = [')', '}', ']'];

  while (index < S.length) {
    if (stack.length === 0) {
      if (closingBrackets.includes(S[index])) {
        return 0;
      } else {
        stack.push(S[index]);
      }
    } else if (
      (S[index] === ')' && stack[stack.length - 1] === '(') ||
      (S[index] === '}' && stack[stack.length - 1] === '{') ||
      (S[index] === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else {
      if (closingBrackets.includes(S[index])) {
        return 0;
      } else {
        stack.push(S[index]);
      }
    }
    console.log('stack:', stack);
    index++;
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution(')()('));
console.log(solution('([)()]'));
console.log(solution('({{({}[]{})}}[]{})'));
