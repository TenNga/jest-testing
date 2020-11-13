const sortUp = (arr) => {
    return arr.sort((a,b) => a - b)
}
const sortDown = (arr) => {
    return arr.sort((a,b) => b - a)
}

module.exports.sortDown = sortDown;

module.exports.sortUp = sortUp;