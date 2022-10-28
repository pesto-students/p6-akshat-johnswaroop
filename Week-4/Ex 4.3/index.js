/*
Exercise 4.3 : Implement Fibonacci Series with Iterators
*/

// 0 1 1 2 3 5 8 13

let fibonacci = {
    fibOf: 5,
    [Symbol.iterator]() {
        let i = 0;
        let oldVal = 0;
        let newVal = 0;
        return {
            next: () => {
                if (i >= this.fibOf) { return { done: true } }
                i++;
                [oldVal, newVal] = [newVal, newVal + oldVal || 1]
                return { value: oldVal, done: false }
            }
        }
    }
};

// 

fibonacci.fibOf = 10;
console.log(`first ${fibonacci.fibOf} values of fibonacci series are \n`);
for (let f of fibonacci) {
    console.log(f)
}