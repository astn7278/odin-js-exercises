const fibonacci = function (count) {
    if (count < 0) return "OOPS";
    let fibPart = [0, 1];
    let fibResult;
    for (let index = 1; index < count; index++) {
        fibResult = fibPart[index] + fibPart[index - 1];
        fibPart.push(fibResult);
    }
    return fibPart[count];
};

// Do not edit below this line
module.exports = fibonacci;
