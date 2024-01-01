/*
You are given a string S consisting of N lowercase English letters. In how many ways can we split S into two
non-empty parts, such that in at least one part the letter 'x' and the letter 'y' occur the same number of times?
Write a function:
int solution(char *S);
that, given a string S of length N, returns the number of splits S satisfying the condition above.
Examples:
    1. Given S = "ayxbx", the function should return 3. There are four possible splits of S: "a/yxbx", "ay/xbx",
    "ayx/bx" and "ayxb/x". Only "ay/xbx" does not fulfill the condition, so the answer is 3. Note that in "a/yxbx"
    the left part has 0 occurrences of 'x' and 'y', so it counts as correct split.
    2. Given S = "xzzzy", the function should return 0.
    3. Given S = "toyxmy", the function should return 5.
    4. Given S = "apple", the function should return 0.
    Write an efficient algorithm for the following assumptions:
    N is an integer within the range [2..200,000];
    string S is made only of lowercase letters (a−z).
*/

function solution(S) {
    const n = S.length;
    let countX = 0, countY = 0;
    let result = 0;
  
    for (let i = 0; i < n; i++) {
      if (S[i] === 'x') {
        countX++;
      } else if (S[i] === 'y') {
        countY++;
      }
    }
  
    let prefixX = 0, prefixY = 0;
  
    for (let i = 0; i < n - 1; i++) {
      if (S[i] === 'x') {
        prefixX++;
      } else if (S[i] === 'y') {
        prefixY++;
      }
  
      const suffixX = countX - prefixX;
      const suffixY = countY - prefixY;
  
      if ((prefixX === suffixX || prefixY === suffixY) && (countX > 0 && countY > 0)) {
        result++;
      }
    }
  
    return result;
  }

// function solution(str = '') {
//    if(typeof str !== 'string') return 0
//    if(str.length === 0) return 0
//    let count = 0
//    const strLowerCase = str.toLocaleLowerCase()
//    const isSymbolInChar = (symbol = '', char = '') => char.indexOf(symbol) === -1 ? false : true
//    for (let index = 0; index < strLowerCase.length - 1; index++) {
//     const left = strLowerCase.slice(0, index + 1)
//     const right = strLowerCase.slice(index + 1, strLowerCase.length)
//     const isHasXinCharLeft = isSymbolInChar('x', left)
//     const isHasYinCharLeft = isSymbolInChar('y', left)
//     const isHasXinCharRight = isSymbolInChar('x', right)
//     const isHasYinCharRight = isSymbolInChar('y', right)
//     if((isHasXinCharLeft && isHasYinCharLeft) || (isHasXinCharRight && isHasYinCharRight)) {
//         count++
//     }
//    }
//    return count;
// }
console.log(solution("ayxbx"))
console.log(solution("xzzzy"))
console.log(solution("toyxmy"))
console.log(solution("apple"))