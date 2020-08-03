// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶


// 斐波那契数列 + 滚动数组：
// 时间复杂度： O(n)
// 空间复杂度： O(1)
function rollArr(num) {
	if(num == null) reurn -1;
	if(num == 1) return 1;
	let fir = 1,
		sec = 2;
	for(let i = 3; i <= num; i ++) { // 为什么是<=呢？？？ 如果是<就是最后一个台阶没有上
		let third = fir + sec;
		fir = sec;
		sec = third;
	}
	return sec;
}
console.log( rollArr(12) );


// 动态规划：
// 时间复杂度： O(n)
// 空间复杂度： O(n)
function dynamicPro(n) {
	if(n == null) return -1;
	if(n == 1) return 1;
	const dp = [];
	dp[1] = 1;
	dp[2] = 2;
	for(let i = 3; i <= n; i ++) { // 为什么是<=呢？？？ 如果是<就是最后一个台阶没有上
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
}
console.log( dynamicPro(12) );


// 记忆化递归：
// 时间复杂度： O(n)
// 空间复杂度： O(n)
function remberdigui(n) {
	if(n == null) return -1;
	const cache = [];
	return digui(n, cache);
}

function digui(n, cache) {
	if(cache[n] > 0) {
		return cache[n];
	}
	if(n == 1) return 1;
	else if(n == 2) return 2;
	else return digui(n - 1, cache) + digui(n - 2, cache);
}
console.log( remberdigui(12) )




// 递归：
// 时间复杂度为： O(2^n)
// 空间复杂度为： O(n)
// 劣势：进行了很多重复的计算
function getAllWay(num) {
	if(num == null) return -1;
	if(num <= 0) return 0;
	else if(num == 1) return 1;
	else if(num == 2) return 2;
	else return getAllWay(num - 1) + getAllWay(num - 2);
}
console.log( getAllWay(12) );