// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。


// 方法一： 正数增益
// 因为找最大和的连续子数组， 所以负数无增益效果，所以，直接赋值即可。
// 但是正数有增益的效果，所以得进行累加。
// 
// 时间复杂度：O(n)，其中 nn 为 nums 数组的长度。我们只需要遍历一遍数组即可求得答案。
// 空间复杂度：O(1)，我们只需要常数空间存放若干变量。

/**
 * @param {number[]} nums
 * @return {number}
 */
var arr = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    let ans = nums[0]; // 结果初始化
    let sum = 0; // 初始化是无增益结果的
    for(const num of nums) {
    	// 为什么是 sum > 0 呢？
    	// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
		// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
		// 所以，这个解法是以当前遍历的项为最大值，判断sum对当前的项有没有增益效果。
		// 所以，主体是当前遍历的项，sum是用来产生增益效果
        if(sum > 0) { // sum 有增益效果
            sum += num; 
        } else { // 无增益效果
            sum = num; 
        }
        ans = Math.max(ans, sum); // 每一次循环都进行结果的比较，避免出现当前项是负数，而又增益效果的出现，导致这次产生的结果变小
    }
    return ans;
};
console.log( maxSubArray(arr) );


// 分治法： 暂时不了解










// 2020.10.16
function findMax(arr) {
    if(arr === null || arr.length == 0) return;
    var max = 0,
        res = arr[0],
        len = arr.length;

    for(var i = 1; i < len; i ++) {
        if(max > 0) {
            max = max + arr[i]
        } else {
            max = arr[i]
        }
        res = Math.max(max, res);
    }

    return res;
}
console.log( findMax([-2,1,-3,4,-1,2,1,-5,4]) );





























