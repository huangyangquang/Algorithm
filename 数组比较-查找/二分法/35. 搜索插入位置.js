// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。

// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2

// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1

// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4

// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0

// 二分法: 因为是有序的所以可以直接使用二分法；同时因为需要判断出插入位置或者是所在位置，就可以直接去查找大于或等于的数字的下标即可

// 时间复杂度：O(logn)，其中 nn 为数组的长度。二分查找所需的时间复杂度为 O(logn)。
// 空间复杂度：O(1)。我们只需要常数空间存放若干变量。
function twoSearch(arr, target) {
	var l = 0, 
		r = arr.length - 1,
		res = arr.length

	while(l <= r) {
		// console.log(l, r)
		var mid = Math.floor((l + r) / 2)

		if(target <= arr[mid]) {
			res = mid
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	return res;
}
// console.log( twoSearch([1,3,5,6], 5) )
// console.log( twoSearch([1,3,5,6], 2) )
// console.log( twoSearch([1,3,5,6], 7) )
// console.log( twoSearch([1,3,5,6], 0) )
// console.log( twoSearch([1], 0) )


// 遍历：
function searchFind(arr, target) {
	var len = arr.length
	for(var i = 0; i < len; i ++) {
		if(arr[i] === target) {
			return i
		} else if(arr[i] < target && target < arr[i + 1]) {
			return i + 1
		} else if(i === len - 1 && arr[i] < target) {
			return len
		} else if(i === 0 && arr[i] > target) {
			return i
		}
	}
}
// console.log( searchFind([1,3,5,6], 5) )
// console.log( searchFind([1,3,5,6], 2) )
// console.log( searchFind([1,3,5,6], 7) )
// console.log( searchFind([1,3,5,6], 0) )
// console.log( searchFind([1], 0) )