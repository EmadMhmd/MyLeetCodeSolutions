class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        nums_set = set(nums);
        return sum(nums_set) + sum(nums_set) - sum(nums);
            