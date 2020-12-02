// 11. 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器。

// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例 2：
// 输入：height = [1,1]
// 输出：1

// 示例 3：
// 输入：height = [4,3,2,1,4]
// 输出：16

// 示例 4：
// 输入：height = [1,2,1]
// 输出：2


// 双指针：
// 时间复杂度：O(N)，双指针总计最多遍历整个数组一次。
// 空间复杂度：O(1)，只需要额外的常数级别的空间。

function maxWater(arr) {
	if(arr === null || arr.length === 0) return

	var max = 0,
		l = 0,
		r = arr.length - 1

	while(l < r) {
		var min = Math.min(arr[l], arr[r]) * (r - l)
		max = Math.max(min, max)
		if(arr[l] <= arr[r]) {
			l ++
		} else {
			r --
		}
	}
	return max
}
console.log( maxWater([1,8,6,2,5,4,8,3,7]) )
console.log( maxWater([1,1]) )
console.log( maxWater([4,3,2,1,4]) )
console.log( maxWater([1,2,1]) )

