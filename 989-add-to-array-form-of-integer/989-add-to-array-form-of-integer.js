/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let sum = "";
    num.map((d)=> sum += d)
    let sumPlus = BigInt(sum)
    sumPlus += BigInt(k);
    return String(sumPlus).split("");
};