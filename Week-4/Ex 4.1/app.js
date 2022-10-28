
const getNumber = (resolve, reject, fullfilled, timeout) => {
    setTimeout(() => {
        let num = Math.ceil(Math.random() * 100);
        if (num % 5 == 0) {
            resolve(num);
        }
        else {
            reject(num);
        }
        fullfilled(timeout);
    }, timeout)
}

class CustomPromise {
    constructor(fn, timeout) {
        this.thenCB;
        this.catchCB;
        this.finallyCB;
        this.timeout = timeout;

        function resolve(arg) {
            this.thenCB(arg);
        }

        function reject(arg) {
            this.catchCB(arg);
        }

        function fullfilled(arg) {
            this.finallyCB(arg);
        }

        fn(resolve.bind(this), reject.bind(this), fullfilled.bind(this), this.timeout)
    }
    then(fn) {
        this.thenCB = fn
        return this
    }
    catch(fn) {
        this.catchCB = fn
        return this
    }
    finally(fn) {
        this.finallyCB = fn
        return this
    }
}

let fn = new CustomPromise(getNumber, 3000)

fn
    .then((num) => console.log(`Resolved num : ${num} is divisible by 5`))
    .catch((num) => console.log(`Rejected num = ${num} is not divisible by 5`))
    .finally((num) => console.log(`Fullfilled resolution/rejection time = ${num}ms`))

