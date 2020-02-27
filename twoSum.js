// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 暴力解法：
function twoSum(arr, target) {
	if(arr == null || arr.length == 0 || target == null) return;
	var temp = [];
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		for(var j = i + 1; j < len; j ++) {
			if(arr[i] + arr[j] == target) {
				if(temp.indexOf(i) == -1 && temp.indexOf(j)) {
					temp.push(i);
					temp.push(j);
				}
			}
		}
	}
	return temp;
}

console.log( twoSum([2, 7, 11, 15], 9) );

// 两遍哈希表：
function twoSum1(arr, target) {
	if(arr == null || arr.length == 0 || target == null) return;
	var map = new Map();
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		map.set(arr[i], i);
	}
	for(var j = 0; j < len; j ++) {
		var temp = target - arr[j];
		if(map.has(temp) && map.get(temp) != j) {
			return [j, map.get(temp)];
		}
	}
	return [];
}

console.log( twoSum1([2, 7, 11, 15], 9) );

// 一遍哈希表：
function twoSum2(arr, target) {
	if(arr == null || arr.length == 0 || target == null) return;
	var map = new Map();
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		var temp = target - arr[i];
		if(map.has(temp)) {
			return [map.get(temp), i];
		}
		map.set(arr[i], i);
	}
	return [];
}

console.log( twoSum2([2, 7, 11, 15], 9) )