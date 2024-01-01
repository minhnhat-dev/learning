function searchBinary(arr = [],  number = 0) {
    if(arr.length ===0 ) return -1
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while(start <= end) {
        if(arr[middle] === number) {
            return middle
        }
        if(arr[middle] > number) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return -1
}
console.log(searchBinary([2, 6, 7, 9, 11], 11))
console.log(searchBinary([2, 6, 7, 9, 11], 2))
console.log(searchBinary([2, 6, 7, 9, 11], 19))
console.log(searchBinary([2, 6, 7, 9, 11], 1))