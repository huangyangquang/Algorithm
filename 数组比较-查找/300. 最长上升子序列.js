// 300. 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。



function longest(arr) {
	if(arr === null || arr.length === 0) return

	var len = arr.length,
		res = [],
		max = 0

	for(var i = 0; i < len; i ++) {
		res[i] = 1
		for(var j = 0; j < i; j ++) {
			if(arr[i] > arr[j]) {
				res[i] = Math.max(res[i], res[j] + 1)
			}
		}
		max = Math.max(max, res[res.length - 1])
	}
	return max
}
console.log( longest([10,9,2,5,3,7,101,18]) )
console.log( longest([10,9,2,5,3,4]) )

// 基本思路：
// [10, 9, 2, 5, 3, 4, 100]
// [1, 1, 1, 2, 1, 3, 7]
// 但是会发现，100时，就出错了，我们要找的时递增的子序列
// 
// 所以，如何判断递增才是主要的矛盾。
// 我们会发现，如果在判断时递增时，100，最多比当前正在比较的数多1
// j： 就是当前比较的数据的索引
// i： 就是当前数的索引
// 所以就可以解释为什么是: Math.max(res[i], res[j] + 1)


// 2020.11.04
function longest1(arr) {
	if(arr === null || arr.length === 0) return 0

	var len = arr.length,
		res = [],
		max = 0

	for(var i = 0; i < len; i ++) {
		res[i] = 1
		for(var j = 0; j < i; j ++) {
			if(arr[j] < arr[i]) {
				res[i] = Math.max(res[i], res[j] + 1)
			}
		}
		max = Math.max(max, res[i])
	}

	return max;
}
console.log( longest1([10,9,2,5,3,7,101,18]) )
console.log( longest1([10,9,2,5,3,4]) )

