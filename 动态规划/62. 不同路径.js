// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 问总共有多少条不同的路径？

// 示例 1:
// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右

// 示例 2:
// 输入: m = 7, n = 3
// 输出: 28

// 动态规划：
// 时间复杂度: O(n * m). dp[i][j] = dp[i][j - 1] + dp[i - 1][j]; 运行了 ( n - 1 ) * ( m - 1 ) 次.
// 空间复杂度: O(n * m). 二维数组 dp 包含 n 个一维数组, 每个一维数组里有 m 个元素.
function path(m, n) {
	var res = []

	for(var i = 0; i < n; i ++) {
		res[i] = []
		res[i][0] = 1
	}

	for(var j = 0; j < m; j ++) {
		res[0][j] = 1
	}

	for(var i = 1; i < n; i ++) {
		for(var j = 1; j < m; j ++) {
			res[i][j] = res[i - 1][j] + res[i][j - 1]
		}	
	}

	return res[n - 1][m - 1]
}
console.log(path(3, 2))
console.log(path(7, 3))

// 2020.11.13
function path1(m, n) {
	var res = []

	for(var i = 0; i < n; i ++) {
		res[i] = []
		res[i][0] = 1
	}

	for(var j = 0; j < m; j ++) {
		res[0][j] = 1
	}

	for(var i = 1; i < n; i ++) {
		for(var j = 1; j < m; j ++) {
			res[i][j] = res[i - 1][j] + res[i][j - 1]
		}
	}

	return res[n - 1][m - 1];
}
// console.log(path1(3, 2))
// console.log(path1(7, 3))

// 2020.11.13(默写)
function path2(m, n) {
	var res = []

	for(var i = 0; i < n; i ++) {
		res[i] = []
		res[i][0] = 1
	}

	for(var j = 0; j < m; j ++) {
		res[0][j] = 1
	}

	for(var i = 1; i < n; i ++) {
		for(var j = 1; j < m; j ++) {
			res[i][j] = res[i - 1][j] + res[i][j - 1]
		}
	}

	return res[n - 1][m - 1]
}
// console.log(path2(3, 2))
// console.log(path2(7, 3))