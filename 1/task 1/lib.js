const sum = (a, b) => a + b;

const sumArray = array => array.reduce(sum);

module.exports = {
    sum,
    sumArray,
}