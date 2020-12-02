// 剑指 Offer 56 - I. 数组中数字出现的次数
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。 

// 示例 1：

// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
// 示例 2：

// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]


var singleNumbers = function(nums) {
	if(nums === null) return;



}



// 一次全员异或：
function single(nums) {
	if(nums === null) return;
	var res = 0;
	for(var k of nums) {
		res ^= k;
	}
	return res;
}
console.log( single([1, 2, 3, 3, 2]) );
console.log( single([1, 2, 3, 3, 2, 1, 7]) );