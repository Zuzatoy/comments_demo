
export { App } from './App';
// //Q1: reformat a string if string characters occurred 3 times, then you need to remove one of characters,
// //keep it as two. For instance, if the input string is xxxyxzxxx, the output should be xxyzxx. abccc

// const refactorString = (S) => {
//   let result = "";
//   let sequence = "";

//   if (!(typeof S === 'string')) {
//       return '';
//   }

//   for (let i = 0; i < S.length; i++) {
//     if (S[i - 1] === S[i]) {
//       sequence += S[i];
//     } else {
//       result += (sequence.length >= 2 ? sequence.substring(0, 2) : sequence);
//       sequence = S[i];
//     }
//   }

//   return result += (sequence.length >= 2 ? sequence.substring(0, 2) : sequence);
// };

// console.log(refactorString("xxxtxxx"));
// console.log(refactorString("eedaaad"));
// console.log(refactorString("asdasddd"));
// console.log(refactorString("ddddddddd"));
// console.log(refactorString("xxxyyyxxxxzzzxxx"));
// console.log(refactorString("x"));
// console.log(refactorString(""));
// console.log(refactorString(undefined));
