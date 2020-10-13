// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 排序 + 双指针 + 双层循环
var threeSum = function(nums) {
	if(nums === null || nums.length < 3) return [];

	var res = [],
		len = nums.length;

	nums.sort((a, b) => (a - b)); // 排序，数组是递增的，以 数字0 为一个特殊的节点

	for(var i = 0; i < len; i ++) { // 循环，确定起点
		if(nums[i] > 0) break;

		if(i > 0 && nums[i] === nums[i - 1]) continue; // 去重

		var L = i + 1, // 左指针
			R = len - 1; // 右指针

		while(L < R) {
			var sum = nums[i] + nums[L] + nums[R]; // 求和
			
			if(sum === 0) { // 和为零
				res.push([nums[i], nums[L], nums[R]]); // 保存结果
				while(L < R && nums[L] == nums[L + 1]) L ++; // 去重
				while(L < R && nums[R] == nums[R - 1]) R --; // 去重
				L ++;
				R --;
			} else if(sum < 0) {
				L ++
			} else if(sum > 0) {
				R --;
			}
		}
	}
	return res;
};
console.log( threeSum([-1, 0, 1, 2, -1, -4]) );





// 2020.10.10 (默写，全对)
var _threeSum = function(arr) {
	if(arr === null || arr.length < 3) return [];

	arr.sort((a, b) => (a - b));

	var len = arr.length,
		res = [];

	for(var i = 0; i < len; i ++) {
		if(arr[i] > 0) break;

		if(i > 0 && arr[i] === arr[i - 1]) continue;

		var l = i + 1,
			r = len - 1;

		while(l < r) {
			var sum = arr[i] + arr[l] + arr[r];
			if(sum === 0) {
				res.push([arr[i], arr[l], arr[r]]);
				while(l < r && arr[l] === arr[l + 1]) l ++;
				while(l < r && arr[r] === arr[r - 1]) r --;
				l ++;
				r --;

			} else if(sum < 0) {
				l ++;

			} else if(sum > 0) {
				r --;

			}
		}
	}

	return res;
}
console.log( _threeSum([-1, 0, 1, 2, -1, -4]) );
console.log( _threeSum([-1, 0, 2, 2, -1, -4]) );




































