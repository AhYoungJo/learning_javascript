class Stack {
    #arr = [];
    constructor(...args) {
        this.#arr = args;
    }

    [Symbol.iterator]() {
        let idx = 0;
        const arr = this.#arr;
        return {
            next() {
                return {value: arr[idx++], done: idx > arr.length};
            },
        };
    }
    toString() {
        return JSON.stringify(this.#arr);
    }
    // print() {
    //     console.log(this.toString());
    // }
    push(...args) {
        this.#arr.push(...args);
        return this;
    }
    pop() {
        this.#arr.pop();
        return this;
    }
    clear() {
        this.#arr.length = 0;
    }
}

class Queue {
    #arr = [];
    constructor(...args) {
        this.#arr = args;
    }

    //객체가 이터러블임을 알려주는 특별한 프로퍼티로, 이 프로퍼티로 작성해줘야 이터러블해짐..
    *[Symbol.iterator]() {
        // let idx = 0;
        // const arr = this.#arr;
        // return {
        //     next() {
        //         return {value: arr[idx++], done: idx > arr.length};
        //     },
        // };
        for (let i = 0; i < this.#arr.length; i++) {
            yield this.#arr[i];
        }
    }
    //굳이 필요할까 싶은
    *iterator() {
        for (let i = 0; i < this.#arr.length; i++) {
            yield `${i}: ${this.#arr[i]}`;
        }
    }

    toString() {
        return JSON.stringify(this.#arr);
    }
    enqueue(...args) {
        this.#arr.push(...args);
        return this;
    }
    dequeue() {
        this.#arr.shift();
        return this;
    }
}

const stack = new Stack('Toby', 'Max', 'Sam');
console.log([...stack]);
for (const s of stack) console.log(s);
const itStack = stack[Symbol.iterator](); // 또는 const itStack = stack.iterator();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

const queue = new Queue('Ruby', 'Taylor', 'Luna');
for (const q of queue) console.log(q);
const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
