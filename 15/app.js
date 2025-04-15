"use strict";
// // any - istalgan tip
// // unknown - noaniq tip
function logger(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log('Unknown type');
    }
}
// function logger(value: any) {
//     console.log(value.toUpperCase())
// }
logger('Hello');
logger(2.21312);
logger(true);
