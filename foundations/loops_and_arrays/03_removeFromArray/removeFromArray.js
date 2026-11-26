const removeFromArray = function(arr, ...argsToRemove) {
    let indicesToRemove = [];

    for(let arg of argsToRemove) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arg) {
                indicesToRemove.push(i);
            }
        }
    }

    //sort from largest to smallest index
    indicesToRemove.sort((a,b) => b - a);

    //splice
    for(let index of indicesToRemove) {
        arr.splice(index, 1);
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
