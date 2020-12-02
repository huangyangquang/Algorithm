// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""

// 解释: 输入不存在公共前缀。
// 说明:
// 所有输入只包含小写字母 a-z 。

// 参数： 数组
// 元素： 字符串

// 默认以第一个字符串为标准，遍历这个字符串的长度，获取字符

// 方法二：
function longestCommonPrefix(arr) {
	if(arr == null || arr.length == 0) return "";
	var prefix = arr[0];
	for(var i = 1; i < arr.length; i ++) {
		while(arr[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if(prefix == "") return "";
		}
	}
	return prefix;	
}






// 方法一：
// function longestCommonPrefix(arr) {
// 	if(arr == null || arr.length == 0) return '';
// 	var template = arr[0];
// 	var index = -1;
// 	for(var i = 0; i < template.length; i ++) {
// 		var sub = template.substring(0, i + 1);
// 		var has = arr.every(function(ele, index, self) {
// 			return ele.indexOf(sub) == 0;
// 		})
// 		console.log(has, sub, i);
// 		if(has) index = i;
// 	}
	
// 	return index == -1 ? '' : template.substring(0, index + 1);
// }

var commonPrefix = longestCommonPrefix(["c","ccc"]);
console.log(commonPrefix);