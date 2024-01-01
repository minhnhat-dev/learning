/*
There are N guests (numbered from 0 to N-1) in a sanatorium waiting to be assigned a room. In each room,
any number of guests can be accommodated. However, not all guests like to have a lot of roommates.
You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K]
guests, including themselves.
Write a function:
int solution(int A[]);
that, given the array A, returns the minimum number of rooms needed to accommodate all guests.
Examples:
    1. Given A = [1, 1, 1, 1, 1], your function should return 5. Each guest should be accommodated in their own
    separate room.
    2. Given A = [2, 1, 4], your function should return 2. The second guest should be accommodated in one room
    and the other two guests in another room.
    3. Given A = [2, 7, 2, 9, 8], your function should return 2. The first and the third guests should be
    accommodated in one room and the other three guests in another room.
    4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4. The guests can be accommodated as
    follows: the first two guests in one room, the third and the fourth guests in two single rooms, and the other
    guests in another room.
*/

function solution(arr = []) {
    if(arr.length === 0) return 0
    if(arr.length === 1) return 1
    let count = 0
    const maxNumber = Math.max(...arr)
    const counter = {}
    for (const number of arr) {
        counter[number] = (counter[number] || 0) + 1
    }
    for (const key in counter) {
        if(key === '1') {
            count += counter[key]
        }
        if(counter[key] > 1 && key !== '1') {
            count += 1
        }
    }
    if(maxNumber !== 1 && counter[maxNumber]) {
        count += 1
    }
    return count
}

console.log(solution([1, 1, 1, 1, 1])) // 5
console.log(solution([2, 1, 4]))// 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])) // 4
console.log(solution([1, 1, 1, 1, 2])) // 5
console.log(solution([1, 2, 1, 1, 2, 3, 3, 4])) // 6
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9, 9])) // 5