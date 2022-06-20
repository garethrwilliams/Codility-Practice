// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const returnArray = [...A];

//   for (let x = returnArray.length - 1; x > 0; x--) {
//     let firstIndex = returnArray.shift();
//     console.log('firstIndex:', firstIndex);

//     let match = returnArray.findIndex((e) => e === firstIndex);

//     if (match === -1) return firstIndex;
//     returnArray.splice(match, 1);
//   }
// }

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const returnArray = [...A].sort();

  let oddOne;

  for (let i = 0; i < returnArray.length; i++) {
    if (
      returnArray[i] !== returnArray[i - 1] &&
      returnArray[i] !== returnArray[i + 1]
    ) {
      oddOne = returnArray[i];
      break;
    }
  }
  return oddOne;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
