'use strict'

const MAX_VALUE = 255;

function sort(arr) {
    const countArr = new Array(MAX_VALUE + 1).fill(0);
    
    for (let n of arr) {
        countArr[n]++;
    }

    for (let i = 1; i < countArr.length; i++) {
        countArr[i] += countArr[i - 1];
    }

    let sortedArr = [];
    for (let n of arr) {
        sortedArr[countArr[n] - 1] = n;
        countArr[n]--;
    }

    for (let i = 0; i < sortedArr.length; i++) {
        arr[i] = sortedArr[i];
    }
}

module.exports = sort;
