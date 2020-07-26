// 221. 最大正方形
// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:

// 输入: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// 输出: 4


/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 暴力解法
let maximalSquare = function(matrix) {
	// 严谨性判断
	if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return matrix;
	// 初始化变量
	let maxSide = 0; // 最长边
		row = matrix.length, // 行数
		col = matrix[0].length; // 列数
	for(let i = 0; i < row; i ++) {
		for(let j = 0; j < col; j ++) {
			if(matrix[i][j] == 1) { //matrix[i][j] 为每一个元素 当这个元素为1时 以这个元素为正方形的左上角
				maxSide = Math.max(maxSide, 1); 
				let curSide = Math.min(row - i, col - j); // 以当前元素为左上角 可能的最大边
				for(let k = 1; k < curSide; k ++) {
					let flag = true;
					if(matrix[i + k][j + k] == 0) {//对角线
						break; //跳出当前这层循环 k这个循环
					}

					for(let m = 0; m < k; m ++) {
						if(matrix[i + m][j + k] == 0 || matrix[i + k][j + m] == 0) { //除对角线外的每一个元素
							flag = false;
							break; //跳出当前这层循环 m这个循环
						}
					}

					if(flag) {
						maxSide = Math.max(maxSide, k + 1); //最大边
					} else {
						break; // 跳出当前这层循环 k这个循环
					}

				}
			}
		}	
	}
	return maxSide * maxSide; //返回平方数
};


// 动态规划
let maximalSquare1 = function(matrix) {
	// 严谨性判断
	if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {
		return 0;
	}
	let maxSide = 0, // 最长边
		row = matrix.length, // 行数
		col = matrix[0].length, // 列数
		dp = []; // 初始化数组dp
	for(let i = 0; i < row; i ++) {
		dp[i] = new Array(col);
		for(let j = 0; j < col; j ++) {
			if(matrix[i][j] == 1) {
				if(i == 0 || j == 0) { // 边界判断 因为是dp[i][j]是代表右下角的值
					dp[i][j] = 1; // 如果在最左边 或者 在最上边
				} else {
					dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1; //如果不在在最左边 或者 在最上边
				}
				maxSide = Math.max(maxSide, dp[i][j]);
			} else { 
				dp[i][j] = 0;
			}
		}
	}
	return maxSide * maxSide;
}
