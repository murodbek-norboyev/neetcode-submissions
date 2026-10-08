class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var groups = {}

        for (var i = 0; i < strs.length; i++) {
            var word = strs[i];
            var sortedKey = word.split('').sort().join('');

            if (!groups[sortedKey]) {
                groups[sortedKey] = []
            }

            groups[sortedKey].push(word)
        }

        return Object.values(groups)
    }
}
