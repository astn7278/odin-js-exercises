const repeatString = function(string, x) {
    let newString = '';
    if (x < 0) {
        return('ERROR');
    }
    else {
        for (let i = 0; i < x; i++){
            newString += string;
        }
        return(newString)
    }
};

// Do not edit below this line
module.exports = repeatString;
