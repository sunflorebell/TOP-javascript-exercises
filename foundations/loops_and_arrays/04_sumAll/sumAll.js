const sumAll = function(a, b) {
    
    //validate input
    if(parseInt(a) !== a || a <= 0 || parseInt(b) !== b || b <= 0) {
        return "ERROR";
    }

    let smallerNum = Math.min(a,b);
    let largerNum = Math.max(a,b);


    let sum = 0;
    for(let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
