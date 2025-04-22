"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function throwError(message) {
    throw new Error(message);
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Promise.reject(new Error('Xatolik yuz berdi')).then(() => {
            // })
            const response = yield fetch('https://jsonplaceholder.typicode.com/uses');
            if (!response.ok) {
                throwError('An error occured');
            }
            const data = yield response.json();
            console.log(data);
        }
        catch (error) {
            throwError('Failed to fetch data');
        }
    });
}
fetchData();
