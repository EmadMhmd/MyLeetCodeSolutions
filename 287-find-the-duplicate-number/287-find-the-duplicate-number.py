class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums_set = set(nums);
        return int((sum(nums) - sum(nums_set))/(len(nums) - len(nums_set)));