class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(var i = 0; i < nums.length; i++){
            var diff = target - nums[i];
            var j = nums.indexOf(diff);

            if (i != j && j !== -1) {
                return [i, j]
            }
        }
    }
}
