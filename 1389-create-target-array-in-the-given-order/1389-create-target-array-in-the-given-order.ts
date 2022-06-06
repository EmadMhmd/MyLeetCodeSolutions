function createTargetArray(nums: number[], index: number[]): number[] {
    let target : Array<number> = [];
    for(let i=0; i<index.length; i++){
        target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])]
    }
    return target;
};