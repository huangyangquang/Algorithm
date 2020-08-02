// 121. 买卖股票的最佳时机
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
// 

// 一次遍历，寻找最低点
// 时间复杂度：O(n)，只需要遍历一次。
// 空间复杂度：O(1)，只使用了常数个变量。
const nums = [7,1,5,3,6,4];
function greatTime(nums) {
	if(nums === null || nums.length === 0) return 0;
	let minPoint = Number.MAX_VALUE,
		max = 0,
		len = nums.length;
	for(let i = 0; i < len; i ++) {
		if(nums[i] < minPoint) {
			minPoint = nums[i];
		} else if(nums[i] - minPoint > max) {
			max = nums[i] - minPoint;
		}
	}
	return max;
}
console.log( greatTime(nums) );



// 暴力解法：
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)。 只使用了常数个变量。
const nums = [7,1,5,3,6,4];
function greatTime(nums) {
	if(nums === null || nums.length === 0) return 0;
	let res = 0;
	for(let i = 0; i < nums.length; i ++) {
		for(let j = i + 1; j < nums.length; j ++) {
			if(nums[j] - nums[i] > res) {
				res = nums[j] - nums[i];
			}
		}
	}
	return res;
}
console.log( greatTime(nums) );







