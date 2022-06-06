function pivotArray(nums: number[], pivot: number): number[] {
    let leftNums = [];
    let rightNums = [];
    let pivotNums = [];
    nums.map(n => {
        if(n === pivot) pivotNums.push(n);
        if(n > pivot) rightNums.push(n);
        if(n < pivot) leftNums.push(n);
    })
    return [...leftNums, ...pivotNums, ...rightNums];
};