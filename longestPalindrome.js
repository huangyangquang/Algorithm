// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

// 方法： 中心扩展法 + 双指针
function longest(str) {
	if(str == null || str.length < 1) return '';
	var strat = 0;
	var end = 0;
	for(var i = 0; i < str.length; i ++) { // 遍历所有的字符，以每个字符str[i]为中心向两边拓展, i为中心index
		var len1 = center(str, i, i); // 最长回文串长度为奇数，从中心一直向两边拓展，从而使回文子串
		var len2 = center(str, i, i + 1); // 最长回文串长度为偶数，从两个相邻的数出发，同时向两边拓展
		var len = Math.max(len1, len2);
		if(len > end - strat) {
			strat = i - Math.floor((len - 1) / 2); // 回文子串-开头i 为中心索引 （-1 ？？？）
			end = i + Math.floor(len / 2); // 回文子串-结尾
		}
	}
	return str.substring(strat, end + 1);
}

function center(str, left, right) {
	var l = left;
	var r = right;
	while(l >= 0 && r < str.length && str.charAt(l) == str.charAt(r)) {
		l --;
		r ++;
	}
	return r - l - 1; // 为什么 -1？？？
}

var newStr = longest('aabbbbhaalaa');
console.log(newStr);


// 2020.08.07(全对)
function longest_2(str) {
	if(str === null) return '';
	let len = str.length,
		start = 0,
		end = 0;
	for(let i = 0; i < len; i ++) {
		let len1 = center_2(str, i, i),
			len2 = center_2(str, i, i + 1),
			max = Math.max(len1, len2);
		if(max > end - start) {
			start = i - Math.floor((max - 1) / 2);
			end = i + Math.floor(max / 2);
		}
	}
	return str.substring(start, end + 1);
}

function center_2(str, left, right) {
	let l = left,
		r = right;
	while(l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
		l --;
		r ++;
	}
	return r - l - 1;
}
console.log( longest_2('aabbbbhaalaabbbbbbbbbbbaabbb') );





































// 2020.07.14（默写 全对）
function longest(str) {
	if(str == null || str.length == 0) return '';
	var start = 0,
		end = 0,
		len = str.length;
	for(var i = 0; i < len; i ++) {
		var len1 = center(str, i, i);
		var len2 = center(str, i , i + 1);
		var maxLen = Math.max(len1, len2);
		if(maxLen > end -start) {
			start = i - Math.floor((maxLen - 1) / 2);
			end = i + Math.floor(maxLen / 2);
		}
	}
	return str.substring(start, end + 1);
}

function center(str, left, right) {
	var l = left,
		r = right;
	while(l >= 0 && r < str.length && str[l] === str[r]) {
		l --;
		r ++;
	}
	return r - l - 1;
}

// var long = longest('aahuauhbs');
// console.log(long);







// 2020.08.05(默写 对了80%)
function longestText(str) {
	if(str == null) return '';
	let len = str.length,
		start = 0,
		end = 0;
	for(let i = 0; i < len; i ++) {
		let len1 = centerPoint(str, i, i),
			len2 = centerPoint(str, i, i + 1),
			maxLen = Math.max(len1, len2);
		if(maxLen > end - start) {
			start = i - Math.floor((maxLen - 1) / 2);
			end = i + Math.floor(maxLen / 2);
		}
	}
	return str.substring(start, end + 1);
}

function centerPoint(str, left, right) {
	let l = left,
		r = right;
	while(l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
		l --;
		r ++;
	}
	return r - l - 1;
}
// console.log( longestText("abcdcba") );







// 中心扩展法
// function longestPalindrome(str) {
// 	if(str == null || str.length < 1) return "";
// 	// 游标初始化
// 	var start = 0,
// 		end = 0;
// 	for(var i = 0; i < str.length; i ++) {
// 		// 中心为一个字符
// 		var len1 = expandAroundCenter(str, i, i);
// 		// 中心为两个字符
// 		var len2 = expandAroundCenter(str, i, i + 1);
// 		// 取出最长的长度
// 		var len = Math.max(len1, len2);
// 		// 与原来的长度进行比较
// 		if(len > end - start) {
// 			start = i - Math.floor((len - 1) / 2);
// 			end = i + Math.floor(len / 2);
// 		}
// 	}
// 	return str.substring(start, end + 1);
// }
// function expandAroundCenter(s, left, right) {
// 	var l = left,
// 		r = right;
// 	while(l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
// 		l --;
// 		r ++;
// 	}
// 	return r - l - 1;
// }
// console.log( longestPalindrome('lklkkkkjojkkkklopoop') );
