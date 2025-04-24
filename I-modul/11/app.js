"use strict";
// enum Status {
//     SUCCESS,
//     ERROR,
// }
function getStatus(status) {
    if (status === 'success') {
        return 'success';
    }
    return 'error';
}
console.log(getStatus('success'));
console.log(getStatus('error'));
