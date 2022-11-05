/*
Using Async/Await and Generators, create separate functions and achieve the samefunctionality.
(3hours)
Execute 3 callback functions asynchronously,
 for example doTask1(), doTask2() and doTask3()
*/

console.log(`Using generators`);

const largeTask = (name) => {
    let prom = new Promise((resolve, reject) => {
        console.log(name + " task started");
        setTimeout(() => {
            console.log(name + " task ended");
            resolve()
        }, [10000])
    })
    return prom
}

function* asyncGen(fn1, fn2, fn3) {
    yield fn1()
    yield fn2()
    yield fn3()
}

let iterator = asyncGen(largeTask.bind(this, 1), largeTask.bind(this, 2), largeTask.bind(this, 3));

for (const itx of iterator) {

}

// using async await 

let awaitFn = async (fn1, fn2, fn3) => {
    await Promise.all([fn1(), fn2(), fn3()]);
}

awaitFn(largeTask.bind(this, 4), largeTask.bind(this, 5), largeTask.bind(this, 6))

