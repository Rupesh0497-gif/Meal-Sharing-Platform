class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for(let a of nums){
            obj[a] = (obj[a] || 0) + 1;
        }
        let arr = []
        let result = Object.entries(obj).sort((a,b) => (b[1] - a[1])).slice(0,k)
        for(let a of result){
            arr.push(Number(a[0]))
        }
        return arr
    }
}
