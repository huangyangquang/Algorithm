// 202. 快乐数
// 编写一个算法来判断一个数是不是“快乐数”。

// 一个“快乐数”定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
// 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
// 如果可以变为 1，那么这个数就是快乐数。

// 示例: 

// 输入: 19
// 输出: true
// 解释: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// function isHappy0(num) {
// 	if(num == null) return false;
// 	if(num < 0) return false;
// 	if(num == 1) return true;
// 	var result = 0;
// 	while(num != 0) {
// 		var pop = num % 10;
// 		num = Math.floor(num / 10);
// 		result += Math.pow(pop, 2);
// 	}
// 	if(result != 1) {
// 		return isHappy0(result);
// 	}
// 	return false;
// }
// // 上面怎么判断是无限循环呢？ 无法判断，会导致栈溢出
// console.log( isHappy0(19) );
// console.log( isHappy0(23) );
// console.log( isHappy0(24) );
// console.log( isHappy0(254) );
// console.log( isHappy0(267) );

// 快慢指针：
function bitSquareSum(n) {
	var sum = 0;
	while(n > 0) {
		var pop = n % 10;
		sum += pop * pop;
		n = Math.floor(n / 10);
	}
	return sum;
}

function isHappy(n) {
	var slow = n,                      
		fast = n;                      
    do{
        slow = bitSquareSum(slow);    
        fast = bitSquareSum(fast);  
        fast = bitSquareSum(fast); 
    }while(slow != fast);
    return slow == 1;
}

console.log( isHappy(29) );
console.log( isHappy(23) );
console.log( isHappy(24) );
console.log( isHappy(254) );
console.log( isHappy(267) );
