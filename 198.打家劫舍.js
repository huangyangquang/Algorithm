// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的
// 唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 示例 2:
// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// 解法：动态规划
function rob(arr) {
	if(arr == null || arr.length == 0) return 0;
	var curMax = 0;
	var preMax = 0;
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		var temp = curMax;
		curMax = Math.max(preMax + arr[i], curMax);
		preMax = temp;
	}
	return curMax;
}

console.log( rob([1,2,3,1]) );
console.log( rob([2,7,9,3,1]) );
console.log( rob([1,8,3,4,5]) );
// 理解：
//  [1,2,3,1]
// 0 1 2 4 4
// 0 0 1 2 4

function _rob(arr) {
	if(arr === null || arr.length === null) return 0;
	var curMax = 0,
		preMax = 0,
		len = arr.length;
	for(var i = 0; i < len; i ++) {
		var temp = curMax;
		curMax = Math.max(preMax + arr[i], curMax);
		preMax = temp;
	}
	return curMax;
}
console.log( _rob([1,2,3,1]) );
console.log( _rob([2,7,9,3,1]) );
console.log( _rob([1,8,3,4,5]) );
