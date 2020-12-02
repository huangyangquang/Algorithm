// 561. 数组拆分 I
// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，
// 使得从1 到 n 的 min(ai, bi) 总和最大。

// 示例 1:
// 输入: [1,4,3,2]
// 输出: 4
// 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).

// 2020.10.11
function arrayPairSum(arr) {
	if(arr === null || arr.length % 2 !== 0) return;
	var rightArr = arr.sort((a, b) => (a - b)).filter(function(ele, index) {
		if(index % 2 === 0) {
			return true;
		}
	});
	var sum = rightArr.reduce(function(a, b) {
		return a + b;
	});
	return sum;
}

console.log( arrayPairSum([1,4,3,2]) )







