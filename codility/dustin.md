*
    Task description
    Write a function:
        int solution(int A, int B);
    that, given two non-negative integers A and B, returns the number of bits set to 1 in the binary representation
    of the number A * B.

    For example, given A = 3 and B = 7 the function should return 3, because the binary representation of A * B
    = 3 * 7 = 21 is 10101 and it contains three bits set to 1.

    Assume that:
    A and B are integers within the range [0..100,000,000].
    In your solution, focus on correctness. The performance of your solution will not be the focus of the
    assessment.
 */

// function solution(A, B) {
//     // Implement your solution here
//     // Calculate the final number
//     const multiply = A*B;
//     // Convert to bit string
//     const bitString = multiply.toString(2);
//     /*
//         Count number of bit "1" in string
//
//         There are 4 ways to count the string occurrence in a string by counting
//         the number of times the string is present in the string
//         - Using match() function
//         - Using a loop
//         - Using split() function
//         - Using Indexof()
//     */
//     const numberOfBit1 = (bitString.match(/1/g) || []).length; //This will return wrong value "25", the expected is 26 in case 99999999 x99999999
//
//     return numberOfBit1;
// }

function solution(A, B) {
    // Calculate the product of A and B
    let product = BigInt(A) * BigInt(B);

    // Initialize a count variable to count the '1's
    let count = 0;

    // Loop until the product becomes 0
    while (product > 0n) { // A BigInt value is not strictly equal to a Number value https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
        // Use bitwise AND to check the least significant bit
        if (product & 1n) {
            count++;
        }

        // Right shift the product to check the next bit
        product >>= 1n;
    }

    return count;
}

console.log(solution(99999999, 99999999));
console.log(solution(3, 7));
---
/ MaxNonnegSliceSum

function solution(A) {
    let maxSum = -1;  // Initialize the maximum sum to -1.
    let currentSum = 0;  // Initialize the current sum to 0.
    let hasPositive = false; // Flag to check if there are any positive elements in the array.

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 0) {  // If the current element is non-negative.
            currentSum += A[i]; // Add it to the current sum.
            hasPositive = true; // Set the flag to true.
        } else {
            if (currentSum > maxSum) { // Check if the current sum is greater than the maximum sum.
                maxSum = currentSum; // Update the maximum sum.
            }
            currentSum = 0; // Reset the current sum when encountering a negative element.
        }
    }

    if (!hasPositive) { // If there are no positive elements, return -1.
        return -1;
    }

    return Math.max(maxSum, currentSum); // Return the maximum of maxSum and currentSum.
}

// Example usage:
const array1 = [1, 2, -3, 4, 5, -6];
console.log(solution(array1)); // Output: 9

const array2 = [-8, 3, 0, 5, -3, 12];
console.log(solution(array2)); // Output: 12

const array3 = [-1, 2, 1, 2, 0, 2, 1, -3, 4, 3, 0, -1];
console.log(solution(array3)); // Output: 8

const array4 = [-1, -2, -3, -4, -5];
console.log(solution(array4)); // Output: -1
---- 
// TreeVisibility
function solution(T) {
    // Define a recursive function to traverse the tree.
    function countVisibleNodes(node, maxValue) {
        if (node === null) {
            // Base case: if the node is null, return 0.
            return 0;
        }

        // Update the maximum value seen so far if the current node's value is greater.
        let maxSoFar = Math.max(maxValue, node.x);
        // Count the current node as visible if its value is greater than or equal to the maximum value seen so far.
        let count = node.x >= maxValue ? 1 : 0;

        // Recursively count visible nodes in the left and right subtrees.
        count += countVisibleNodes(node.l, maxSoFar);
        count += countVisibleNodes(node.r, maxSoFar);

        return count;
    }

    // Start the recursion with the root of the tree and initial max value as negative infinity.
    return countVisibleNodes(T, -Infinity);
}

// Example usage:
// Assuming the tree is defined as per the problem statement, for example:
let T = {
    x: 8,
    l: {
        x: 2,
        l: {
            x: 8,
            l: null,
            r: null
        },
        r: {
            x: 7,
            l: null,
            r: null
        }
    },
    r: {
        x: 6,
        l: null,
        r: null
    }
};

// Call the solution function with the tree.
console.log(solution(T)); // Should output 2
--- 
// ObjectRendering - Medium
function solution(D, C, P) {
    // Pair distances with costs
    let paired = D.map((distance, index) => ({distance, cost: C[index]}));

    // Sort by distance and then by cost for objects at the same distance
    paired.sort((a, b) => a.distance - b.distance || a.cost - b.cost);

    let totalCost = 0;
    let count = 0;

    for (let obj of paired) {
        if (totalCost + obj.cost > P) {
            // Stop if adding this object exceeds processing power
            break;
        }
        totalCost += obj.cost;
        count++;
    }

    return count;
}

// Test cases
console.log(solution([5, 11, 1, 3], [6, 1, 3, 2], 7)); // Expected output: 2
console.log(solution([10, 15, 1], [10, 1, 2], 3)); // Expected output: 1
console.log(solution([5, 5, 5, 5], [8, 3, 3, 4], 6)); // Expected output: 2
console.log(solution([11, 18, 1], [9, 18, 8], 7)); // Expected output: 0
console.log(solution([1, 4, 2, 5], [4, 9, 2, 3], 19)); // Expected output: 4
--- 
// BugfixingMaxNonnegSliceSum - Medium
// Correct 3 lines of code to pass

function solution(S) {
    var max_sum = 0; // Change initialization to 0
    var current_sum = 0;
    var positive = false;
    var n = S.length;
    for (var i = 0; i < n; ++i) {
        var item = S[i];
        if (item < 0) {
            if (max_sum < current_sum) {
                max_sum = current_sum; // Removed resetting current_sum here
            }
            current_sum = 0; // Move resetting current_sum to here
        } else {
            positive = true;
            current_sum += item;
        }
    }
    if (current_sum > max_sum) {
        max_sum = current_sum;
    }
    if (positive) {
        return max_sum;
    }
    return -1;
}