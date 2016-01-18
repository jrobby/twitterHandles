/**
 * Created by robbynewman on 1/14/16.
 */



function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


//Or this: the compiler will run through the above first
//var random = function (min, max) {
//    return Math.floor(Math.random() * (1 + max - min) + min);
//}

module.exports = randomNumber;