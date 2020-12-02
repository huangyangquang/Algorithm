// 剑指 Offer 45. 把数组排成最小的数
// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 示例 1:
// 输入: [10,2]
// 输出: "102"

// 示例 2:
// 输入: [3,30,34,5,9]
// 输出: "3033459"

var minNumber = function(nums) {
	if(nums === null) return;

	nums.sort(function(a, b) {
		var n1 = '' + a + b,
			n2 = '' + b + a;

		return n1 - n2 + 0;
	})


	return nums;
};

console.log( minNumber([3,30,34,5,9]) );