// 125. 验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

function isPalindrome(str) {
	if(str == null) return false;
	let = flag = true;
	const reg = /[a-zA-Z0-9]{1}/g;
	const wordArr = str.match(reg);
	if(!wordArr) return true;

	const len = wordArr.length;

	const left = wordArr.slice(0, Math.floor(len / 2));
	const right = wordArr.slice(Math.ceil(len / 2), len).reverse();

	left.forEach((ele, index, self) => {
		if(ele.toUpperCase() !== right[index].toUpperCase()) {
			flag = false;
		}
	})
	return flag;
}
// console.log( isPalindrome(".,") );
// console.log( isPalindrome("A man, a plan, a canal: Panama") );


function isPalindrome1(s) {
	if(s == null) return false;
	const reg = /[^a-zA-Z0-9]+/g
	const str = s.replace(reg, '').toUpperCase();
	return str == str.split('').reverse().join('').toUpperCase();
}
// console.log( isPalindrome1("A man, a plan, a canal: Panama") );

// 双指针
function isPalindrome2(s) {
	if(s == null) return false;
	const reg = /[^a-zA-Z0-9]+/g
	const str = s.replace(reg, '').toUpperCase();
	let left = 0;
	let right = str.length - 1;
	while(left < right) {
		if(str[left] !== str[right]) {
			return false;
		}
		left ++;
		right --;
	}
	return true;
}
// console.log( isPalindrome2(";;") );
