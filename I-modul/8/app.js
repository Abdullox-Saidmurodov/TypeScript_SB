"use strict";
// // // // // // tepaga, pastga, chapga, o'ngga
// // // // // // oddiy enum yaratish uslubi
// // // // // enum Direction {
// // // // //     Up,
// // // // //     Down,
// // // // //     Left,
// // // // //     Right,
// // // // // }
// // // // enum Direction {
// // // //     Up = 1,
// // // //     Down = 2,
// // // //     Left = 3,
// // // //     Right = 4,
// // // // }
// // // enum Direction {
// // //     Up = 'UP',
// // //     Down = 'DOWN',
// // //     Left = 'LEFT',
// // //     Right = 'RIGHT',
// // // }
// // enum Direction {
// //     Up = 'UP',
// //     Down = 'DOWN',
// //     Left = 'LEFT',
// //     Right = 'RIGHT',
// // }
// // const move: Direction = Direction.Up
// // console.log(move)
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT',
// }
// function getDirection(direction: Direction) {
//     if(direction === Direction.Up) {
//         return 'Moving Up'
//     } else if (direction === Direction.Down) {
//         return 'Moving Down'
//     } else if(direction === Direction.Left) {
//         return 'Moving Left'
//     } else if(direction === Direction.Right) {
//         return 'Moving Right'
//     }
// }
// const moveUp = getDirection(Direction.Up)
// console.log(moveUp)
// const moveDown = getDirection(Direction.Down)
// console.log(moveDown)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
