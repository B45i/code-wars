// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Find the odd int

// You: 
const findOdd = A => A.filter(x => A.filter(y => y === x).length % 2 !== 0)[0];

// VS.
// The guy she tells you not to worry about
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

const doTest = (a, n) => {
    const answer = findOdd(a);
    console.assert(answer === n, "Should be %d, got %d", n, answer);
}

(() => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
})();