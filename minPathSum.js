// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:
// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

// 二维动态规划：
// function minPathSum(arr) {
// 	if(arr == null || arr.length == 0) return 0;
// 	var dp = [];
// 	for(var i = arr.length - 1; i >= 0 ; i --) {
// 		dp[i] = [];
// 		for(var j = arr[i].length - 1; j >= 0; j --) {
// 			// 判断边界
// 			if(j == arr[i].length - 1 && i != arr.length - 1) {//紧靠右边界
// 				dp[i][j] = arr[i][j] + dp[i + 1][j]
// 			} else if(i == arr.length - 1 && j != arr[i].length - 1) {//紧靠下边界
// 				dp[i][j] = arr[i][j] + dp[i][j + 1];
// 			} else if(j != arr[i].length - 1 && i != arr.length - 1) {//即不紧靠下边界，也不紧靠右边界
// 				dp[i][j] = arr[i][j] + Math.min( dp[i + 1][j], dp[i][j + 1]);
// 			} else {//在最右下角位置
// 				dp[i][j] = arr[i][j];
// 			}
// 		}
// 	}
// 	return dp[0][0];
// }
// console.log(
// 	minPathSum([
// 	  [1,1,8],
// 	  [0,1,1],
// 	])
// )



// 递归： (超出时间限制)
// function findWay(arr, i, j) {
// 	// 传参错误
// 	if(arr == null || arr.length == 0 || i == null || j == null) return Number.MAX_VALUE;
// 	// 查找超出范围
// 	if(i == arr.length || j == arr[0].length) return Number.MAX_VALUE;
// 	// 出口：到达最右下角的一个时直接返回出来最右下角的值
// 	if(i == arr.length - 1 && j == arr[0].length - 1) return arr[i][j];
// 	// 每一次有两种移动的选择
// 	return arr[i][j] + Math.min(findWay(arr, i + 1, j), findWay(arr, i, j + 1));
// }

// function minPathSum(arr) {
// 	if(arr == null || arr.length == 0) return 0;
// 	return findWay(arr, 0, 0);
// }

// console.log(
// 	minPathSum([
// 	  [1,1,8],
// 	  [2,5,1],
// 	])
// )



