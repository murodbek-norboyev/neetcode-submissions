class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var frequents = {}
  
        for (var i = 0; i < nums.length; i++){
            var number = nums[i]
    
            if (!frequents[number]) {
                frequents[number] = 1
            } else {
            frequents[number] += 1
        }
    } 
  
    var result = Object.keys(frequents)
    
    return result.sort((a,b) => frequents[b] - frequents[a]).slice(0, k).map(Number)
    }
}
