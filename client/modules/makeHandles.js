/**
 * Created by robbynewman on 1/17/16.
 */


function makeHandles(arrayOne, arrayTwo) {
    newArray = [];
    for (var i=0; i<arrayOne.length; ++) {
        newArray.push(arrayOne[i].word +arrayTwo[i].word);
    }
    return newArray;
};

module.exports=makeHandles;

