// 55. 跳跃游戏
// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

// 示例 1:
// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

// 示例 2:
// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。



// 贪心算法：（2020.11.16; 不理解）
function jump(arr) {
	if (arr === null) return false

	var len = arr.length
		rightMost = 0 // 可以到达的最远距离

	for(var i = 0; i < len; i ++) {
		if(i <= rightMost) { // 当前位置（也就当前的距离）是不超过 当前可以到达的最远距离的
			rightMost = Math.max(rightMost, i + arr[i]) // 重新获取最远距离
			if(rightMost >= len - 1) { // 超越了限度的距离
				return true
			}
		}
	}
	return false
}
console.log(jump([2,3,1,1,4]))
console.log(jump([3,2,1,0,4]))


// 方法： 可以到达的最远位置 （下标索引index + 索引对应的值arr[index]）
function jump1(arr) {
	if(arr === null) return false
	var len = arr.length,
		max = 0

	for(var i = 0; i < len; i ++) {
		if(i > max) { 
			// 此时遍历到的是位置是 比所能到达的最远的位置 还要靠后的位置（也就是超出最远跨度范围）
			return false
		}
		max = Math.max(max, i + arr[i])
	}
	return true
}
console.log(jump1([2,3,1,1,4]))
console.log(jump1([3,2,1,0,4]))


// 方法： 最早开始位置
function jump2(arr) {
	if(arr === null) return false

	var last = arr.length - 1
	
	for(var i = last - 1; i >= 0; i --) {
		if(i + arr[i] >= last) {
			last = i
		}
	}

	return last === 0
}
console.log(jump2([2,3,1,1,4]))
console.log(jump2([3,2,1,0,4]))