class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i1 in range(len(nums)):
            for i2 in range(len(nums)):
                if(i1 != i2):
                    if(nums[i1]+nums[i2] == target):
                        return [i1, i2]
