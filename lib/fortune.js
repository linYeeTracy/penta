var fortuneNums = [1,2,3,4,5];

exports.getFortune = function() {
    var index = Math.floor(Math.random() * fortuneNums.length);
    return fortuneNums[index];
}