const assert = require('assert');

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    let length = prices.length;

    for (let i = 0; i < length; i++) {
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            let temp = stack.pop();
            answer[temp] = i - temp;
        }
        stack.push(i);
    }

    while (stack.length) {
        let temp = stack.pop();
        answer[temp] = length - temp - 1;
    }

    return answer;
}

assert.strictEqual(solution([1, 2, 3, 2, 3]), [4, 3, 1, 1, 0]);
