// 9. 回文数
// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

// 使用字符串则会创建空间
function isPalindrome0(x) {
	if(x == null) return false;
	if(x < 0) return false;
	if(x % 10 == 0 && x != 0) return false;
	x = x + '';
	var reserveX = x.split("").reverse().join('');
	return x == reserveX;
}

console.log( isPalindrome0(123) );
console.log( isPalindrome0(121) );


// 反转全部的数：
function isPalindrome(x) {
	if(x == null) return false;
	if(x < 0) return false;
	if(x % 10 == 0 && x != 0) return false;
	var rev = 0;
	var temp = x;
	while(x != 0) {
		var pop = x % 10;
		x = Math.floor(x / 10);
		rev = rev * 10 + pop;
	}
	return rev === temp;
}//有溢出的风险（js有溢出吗？）

// console.log( isPalindrome(123) );
// console.log( isPalindrome(-123) );
// console.log( isPalindrome(121) );
// console.log( isPalindrome(101) );

// 反转一半的数：
function isPalindrome1(x) {
	if(x == null) return false;
	if(x < 0) return false;
	// 如果数字的最后一位是 0，为了使该数字为回文
	if(x % 10 == 0 && x != 0) return false;
	var rev = 0;
	while(x > rev) {
		var pop = x % 10;
		rev = rev * 10 + pop;
		x = Math.floor(x / 10);
	}
	return x == rev || x == Math.floor(rev / 10); 
	// 1221 0
	// 122 1
	// 12 12

	// 121 0
	// 12 1
	// 1 12
}

// console.log( isPalindrome1(123) );
// console.log( isPalindrome1(-123) );
// console.log( isPalindrome1(1221) );
// console.log( isPalindrome1(101) );


function isPalindrome2(x) {
	if(x == null) return false;
	if(x < 0) return false;
	// 如果数字的最后一位是 0，为了使该数字为回文
	if(x % 10 == 0 && x != 0) return false;
	var rev = 0;
	while(x > rev) {
		var pop = x % 10;
		rev = rev * 10 + pop;
		x = ~~(x / 10);
	}
	return x == rev || x == ~~(rev / 10); 
}

// console.log( isPalindrome2(123) );
// console.log( isPalindrome2(-123) );
// console.log( isPalindrome2(1221) );
// console.log( isPalindrome2(101) );


var num = 12546;

// pop操作：
var pop = num % 10;
num = ~~ (num / 10);
// console.log(num); // 1254

// push操作：
num = num * 10 + pop;
// console.log(num); // 12546