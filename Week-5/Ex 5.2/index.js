/*
Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of the vowels in the string.
*/

const vowelCount = (str) => {
    str = str.toLowerCase()
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let vowelMap = new Map();
    for (let ele of str) {
        if (VOWELS.includes(ele)) {
            if (vowelMap.has(ele)) {
                vowelMap.set(ele, vowelMap.get(ele) + 1);
            }
            else {
                vowelMap.set(ele, 1)
            }
        }
    }

    console.log(vowelMap);
}


vowelCount('aeiouaeiouio')
