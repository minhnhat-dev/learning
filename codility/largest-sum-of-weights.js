// Largest Sum Of Weights
/*
    You are given an undirected graph consisting of N vertices, numbered from 1 to N, and M edges. The graph
    is described by two arrays, A and B, both of length M. A pair (A[K], B[K]), for K from 0 to M-1, describes an
    edge between vertex A[K] and vertex B[K].
    Your task is to assign all values from the range [1..N] to the vertices of the graph, giving one number to each
    of the vertices. Do it in such a way that the sum over all edges of the values at the edges' endpoints is
    maximal.
    For example, given N = 5, A = [2, 2, 1, 2], B = [1, 3, 4, 4], the graph has four edges: (2, 1), (2, 3), (1, 4), (2,
    4). In order to obtain the maximum sum of weights, you can assign the following values to the vertices: 3, 5,
    2, 4, 1 (to vertices 1, 2, 3, 4, 5 respectively).
    This way we obtain the sum of values at all edges' endpoints equal to 7 + 8 + 7 + 9 = 31:
    edge (2, 3): 7 = 5 (vertex 2) + 2 (vertex 3)
    edge (2, 1): 8 = 5 (vertex 2) + 3 (vertex 1)
    edge (1, 4): 7 = 3 (vertex 1) + 4 (vertex 4)
    edge (2, 4): 9 = 5 (vertex 2) + 4 (vertex 4)
    Notice that the value assigned to vertex 5 did not have any effect on the final result as it is not an endpoint of
    any edge.
    Write a function:
    int solution(int N, int A[], int B[], int M);
    that, given a positive integer N and two arrays A, B of M positive integers, returns the maximum possible
    sum of values of the edges' endpoints.
    Examples:
    1. Given N = 5, A = [2, 2, 1, 2], B = [1, 3, 4, 4], the function should return 31, as explained above
    2. Given N = 3, A = [1], B = [3] function should return 5. The graph contains only one edge (1, 3). We can
    assign the following values to the vertices: 2, 1, 3.
        - The sum of values at the endpoints of the only edge (1, 3) is 2 + 3 = 5. Notice that it is not the only maximal
    assignment; the input graph admits another possible solution whose result is 5.
    3. Given N = 4, A = [1, 3], B = [2, 4] function should return 10. The graph contains two edges: (1, 2) and (3,
    4). We can assign following values to the vertices: 4, 3, 2, 1.
        - The sum of values at the edges' endpoints is (4 + 3) + (2 + 1) = 10.
*/

function solution(number = 0, arrA = [], arrB = []) {
    if(arrA.length !== arrB.length || number === 0) return 0
    // count number appear the most in array
    let sum = 0 
    const counter = {}
    for (let index = 0; index < arrA.length; index++) {
        const elementA = arrA[index];
        const elementB = arrB[index];
        counter[elementA] = (counter[elementA] || 0) + 1
        counter[elementB] = (counter[elementB] || 0) + 1
    }
    // desc sort number by number appear
    const counterSortedNumber = Object.keys(counter).sort((a,b) => {
        if(counter[a] > counter[b]) { // desc a > b -> it before b (-1)
            return -1
        }
        return 1
    })
    const counterAssignNumber = {}
    for (const numberItem of counterSortedNumber) {
        counterAssignNumber[numberItem] = number--;
    }
    // sum result
    for (let index = 0; index < arrA.length; index++) {
        const sumPair = counterAssignNumber[arrA[index]] + counterAssignNumber[arrB[index]]
        sum += sumPair
    }
    console.log('sum', sum)
    return sum
}
solution(5, [2, 2, 1, 2], [1, 3, 4, 4])
solution(4, [1, 3], [2, 4])
solution(3, [1], [3])
solution(3, [], [])