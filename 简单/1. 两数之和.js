// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function(nums, target) {
	if(nums === null || target === null) return [];

	var len = nums.length;

	for(var i = 0; i < len - 1; i ++) {
		for(var j = i + 1; j < len; j ++) {
			if(nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};
console.log( twoSum([2, 7, 11, 15], 9) );


var _twoSum = function(nums, target) {
	if(nums === null || target === null) return [];

	var own = {}, // hash表
		len = nums.length;

	for(var i = 0; i < len; i ++) {
		if(own[target - nums[i]] !== undefined) {
			return [own[target - nums[i]], i]; // 添加hash表上的值
		} else {
			own[nums[i]] = i;
		}
	}
}
console.log( _twoSum([2, 7, 11, 15], 9) );



