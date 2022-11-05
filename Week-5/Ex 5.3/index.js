/*
Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate.
*/

const hasDuplicate = (arr) => {
    let setFromArray = new Set(arr);
    if ([...setFromArray].length == arr.length) {
        return false
    }
    else {
        return true
    }
}

console.log(hasDuplicate([1, 2, 3]))