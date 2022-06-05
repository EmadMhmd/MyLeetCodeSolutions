/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let runningNums = []
    nums.map(n => {
      sum += n;
      runningNums.push(sum);
    }
    );
    return runningNums;
};