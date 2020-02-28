// 69. x 的平方根

// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:
// 输入: 4
// 输出: 2

// 示例 2:
// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。

// 1.直接使用平方根函数Math.sqrt()
function mySqrt(x) {
	if(x == null) return;
	if(x < 2) return x;
	return ~~Math.sqrt(x);
}

// console.log( mySqrt(4) );
// console.log( mySqrt(8) );


// 2.二分查找 / 折半查找
function mySqrt1(x) {
	if(x == null) return;
	if(x < 2) return x;
	var num = 0;
		pivot = 0;
		left = 2;
		right = Math.floor(x / 2);
	
	while(left <= right) {
		// right - left: 就是从left 到 right 中有多少个数（可理解为距离）
		// (right - left) / 2: 就是获取到从left 到 right 一半的数（可理解为1/2的距离）
		// 所以left + Math.floor((right - left) / 2): 就left 到 right 之间的中心点
		pivot = left + Math.floor((right - left) / 2) ;
		num = pivot * pivot;
		if (num > x) right = pivot - 1;
      	else if (num < x) left = pivot + 1;
      	else return pivot;
	}
	return right;
}

// console.log( mySqrt1(15) );
// console.log( mySqrt1(9) );
// console.log( mySqrt1(7) );

// 递归 + 位移动操作
function mySqrt2(x) {
	if(x == null) return;
	if(x < 2) return x;
	var left = mySqrt2(x >> 2) << 1;
	var right = left + 1;
	return right * right > x ? left : right;
}

console.log( mySqrt2(15) );
console.log( mySqrt2(9) );
console.log( mySqrt2(7) );


// 牛顿法：（暂时没理解）


