/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = "";
    digits.map((d)=> sum += d)
    let sumPlus = BigInt(sum)
    sumPlus += 1n;
    return String(sumPlus).split("");
};