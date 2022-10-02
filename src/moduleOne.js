'use strict';

function sum(arr) {
    let sum = 0;

    arr.forEach(elem => {
        if (typeof elem === 'number') {
            sum += elem;
        }
    })

    return sum;
}

export {sum};