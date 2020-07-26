// [编程题]探险安排

// 小明要为n个人计划一次火星的探险，其中一个重要的任务是为每个参与者安排食物。
// 仓库里面有m个能用一天的食物包裹，每个食物包裹有不同的类型ai。

// 每个人每天必须用且只能用一个食物包裹。由于某些原因，在整个过程中，
// 每个人只能用同一种类型的食物包裹，但是不同的人用的食物包裹可以不一样。

// 给出人数以及食物包裹的情况，请你求出这趟探险最多可以持续多少天。


// 输入描述:
// 第一行两个整数，n和m，表示人数和食物包裹的个数。

// 第二行m个整数，表示每个食物包裹的类型。

// 满足1 <= n <= 100,1 <= m <= 100,1 <= ai <= 100。


// 输出描述:
// 一个整数，表示最多持续的天数；如果一天都无法持续，输出0。

// 输入例子1:
// 4 10                           4个人 10个包裹
// 1 5 2 1 1 1 2 5 7 2            食物包裹的类型 4个1、 3个2、 2个5、 1个7

// 输出例子1:
// 2                               最多持续的天数（1，1，2，5）

function traval(n, m, typeArr) {
	if(n == null || n == 0 || m == null || m == 0 || typeArr == null || typeArr.length == 0) return 0;
	var days = new Map();
	for(var i = 0; i < typeArr.length; i ++) {
		if(days.get(typeArr[i]) == null) {
			days.set(typeArr[i], 1);
		} else {
			days.set(typeArr[i], days.get(typeArr[i]) + 1);
		}
	}
	var typeNum = Math.floor(m / n);
	var baseNum = m % n;
	var count = 0;
	for(var value of days) {
		console.log(value[1]);
		if(value[1] >= baseNum) count ++;
	}

}
traval(4, 10, [1, 5, 2, 1, 1, 1, 2, 5, 7, 2]);