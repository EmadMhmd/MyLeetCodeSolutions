/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let positive = false
    x < 0 ? x=x*(-1) : positive = true;
    x = String(x).split("").reverse().join("");
    positive ? x = Number(x.toString()) : x = Number(x.toString())*(-1);
    return x > 2**31-1 || x < -(2**31) ? 0 : x;
};