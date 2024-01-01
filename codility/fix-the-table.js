/*
Fix The Table
    There are N holes arranged in a row in the top of an old table. We want to fix the table by covering the holes
    with two boards. For technical reasons, the boards need to be of the same length.
    The position of the K-th hole is A[K]. What is the shortest length of the boards required to cover all the
    holes? The length of the boards has to be a positive integer. A board of length L, set at position X, covers all
    the holes located between positions X and X+L (inclusive). The position of every hole is unique.
    Write a function:
    int solution(int A[], int N);
    which, given an array A of integers of length N, representing the positions of the holes in the table, returns
    the shortest board length required to cover all the holes.
    Examples:
    1. Given A = [11, 20, 15], your function should return 4. The first board would cover the holes in positions 11
    and 15, and the second board the hole at position 20.
    2. Given A = [15, 20, 9, 11], your function should return 5. The first board covers the holes at positions 9 and
    11, and the second one the holes in positions 15 and 20.
    3. Given A = [0, 44, 32, 30, 42, 18, 34, 16, 35], your function should return 18. The first board would cover
    the holes in positions between 0 and 18, and the second the positions between 30 and 44.
    4. Given A = [9], your function should return 1.
*/
// boards need the same length
// position of K-th hole is A[K]
// shortest length of broads required to cover all holes
// length of board to be positive integer
// board(L) at position X -> cover all holes between X + L
//  [11, 20, 15], 11 . . . 15 . . . . 20 -> 4 20 -11= 9
// [15, 20, 9, 11] 9 . 11 . . . 15 . . . . 20
// [0, 44, 32, 30, 42, 18, 34, 16, 35]
// [0, 16, 18, 30, 32, 34, 35, 42 , 44]
// 16
//  
// 44 
function solution(arr = []) {
    if(arr.length === 1) return 1
    const arrSorted = arr.sort((a,b) => a > b ? 1 : -1)
    const minimumBoardLength = Math.floor((arrSorted[arrSorted.length - 1] - arrSorted[0]) / 2)
    if(arr.length === 2) return minimumBoardLength
    let left = 0
    let right = left + 1
    let shortestBoard = 0
    while(right < arrSorted.length - 1) {
        if(arrSorted[right] - arrSorted[left] <= minimumBoardLength) {
            shortestBoard = Math.max(arrSorted[right] - arrSorted[left], shortestBoard)
            right++
        } else {
            left = right
            right++
            shortestBoard = Math.max(arrSorted[right] - arrSorted[left], shortestBoard)
        }
    }
    console.log('shortestBoard', shortestBoard)
    return shortestBoard
}
solution([11, 20, 15])
solution([15, 20, 9, 11])
solution([0, 44, 32, 30, 42, 18, 34, 16, 35])