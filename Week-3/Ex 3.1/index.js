/*
Exercise 3.1:Create a memoize function that remembers previous inputs and stores them in cache 
so that itwon’t have to compute the same inputs more than once.
The function will take an unspecifiednumber of integer inputs and a reducer method
*/

function timer(fn) {
    console.time("time taken");
    fn();
    console.timeEnd("time taken");
}

function factorial(input) {
    let fact = 1;
    for (let i = input; i > 0; i--) {
        fact = fact * i;
    }
    return fact
}

function memoize(fn) {
    let cache = {};

    return function (input) {
        if (Object.keys(cache).includes(`${input}`)) {
            return cache[`${input}`];
        }
        cache[`${input}`] = factorial(input);
        return cache[`${input}`]
    }
}

let memoizedFactorial = memoize(factorial);


timer(() => memoizedFactorial(10000));
timer(() => memoizedFactorial(20000));
timer(() => memoizedFactorial(10000));
timer(() => memoizedFactorial(20000));
