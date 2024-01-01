/*\ Max Switching Slice
    We call an array switching if all numbers in even positions are equal and all numbers in odd positions are
    equal.
    For example: [3, −7, 3, −7, 3] and [4, 4, 4] are switching, but [5, 5, 4, 5, 4] and [−3, 2, 3] are not switching.
    What is the length of the longest switching slice (continuous fragment) in a given array A?
    Write a function:
    int solution(int A[], int N);
    that, given an array A consisting of N integers, returns the length of the longest switching slice in A.
    Examples:
    1. Given A = [3, 2, 3, 2, 3], the function should return 5, because the whole array is switching.
    2. Given A = [7, 4, −2, 4, −2, −9], the function should return 4. The longest switching slice is [4, −2, 4, −2].
    3. Given A = [7, −5, −5, −5, 7, −1, 7], the function should return 3. There are two switching slices of equal
    length: [−5, −5, −5] and [7, −1, 7].
    4. Given A = [4], the function should return 1. A single-element slice is also a switching slice.
*/

function solution(arr = []) {

    if(arr.length <= 1) return arr.length
    if(arr.length === 2 && arr[1] === arr[2] ) return 2 
    if(arr.length === 2 && arr[1] !== arr[2] ) return 0
    let longestSwitching = 0
    let start = 0
    let maxTemp = 0
    let reset = 0
    while(start < arr.length) {
      const positiveNext = start + 2
      const negativeNext = start - 2
       if(arr[start] === arr[negativeNext] || arr[start] === arr[positiveNext] && positiveNext !== arr.length - 1) {
          maxTemp += 1
       } else if(arr[start] === arr[start - 1] && arr[start] === arr[start + 1]) {
          maxTemp += 1
       } else {
        longestSwitching = Math.max(longestSwitching, maxTemp)
        reset++
        maxTemp = 0
       }
       start++
    }
    return  reset === 0 ? maxTemp : longestSwitching
}
console.log(solution([3, 2, 3, 2, 3]))
console.log(solution([7, 4, -2, 4, -2, -9]))
console.log(solution([7, -5, -5, -5, 7, -1, 7]))
console.log(solution([7, -5, -5, -5, 7, -1, 7, 7, 7, 7]))
// 3
// [7,       −5,       −5,       −5,       7,       −1,       7]
//                                          start
// [7,      4,      -2,      4,      -2,      -9]
//                                          start
// 
// 4
// [1,    1,     1,    1]
// [1,    2,     3,    4]
                  
//                   start
// [2,       3,       2,       3,       4,       5,       4,       5]
//                                    start
// 4
// [3,           2,           3,           2,           3]
//                                                    start
// temp = 4
// max = temp
// temp = 0
// lef
