// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。

function zeng(x) {
	return x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
}

function reverse(x) {
	var max_value = Math.pow(2, 31) - 1;
	var min_value = -Math.pow(2, 31);
	var zMax = zeng(max_value);
	var zMin = zeng(min_value);
	var rev = 0;
	while(x != 0) {
		var pop = x % 10;
		x = zeng(x);
		if (rev > zMax || (rev == zMax && pop > 7)) return 0;
        if (rev < zMin || (rev == zMin && pop < -8)) return 0;
        rev = rev * 10 + pop;
	}
	return rev;
}

console.log( reverse(-2147483412) ); 
console.log( reverse(-213) ); 
console.log( reverse(83412) );
console.log( reverse(1563847412) ); 
console.log( reverse(-1563847412) );



