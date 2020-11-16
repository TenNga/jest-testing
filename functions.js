const sortUp = (arr) => {
    return arr.sort((a,b) => a - b)
}
const sortDown = (arr) => {
    return arr.sort((a,b) => b - a)
}

const reverseString = (str) => {
    const splitStr = str.split('');
    const reversedSplitStr = splitStr.reverse();
    const joinReverse = reversedSplitStr.join('');
    return joinReverse;
}

module.exports.sortDown = sortDown;

module.exports.sortUp = sortUp;
module.exports.reverseString = reverseString;