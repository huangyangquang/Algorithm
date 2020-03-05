// 58. 最后一个单词的长度
// 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。

// 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。

 

// 示例:

// 输入: "Hello World"
// 输出: 5

function lengthOfLastWord(str) {
	if(str == null) return;
	str = str.trim();
	var strArr = str.split(" ");
	return strArr[strArr.length - 1].length;
}
// console.log( lengthOfLastWord("Hello World") );
// console.log( lengthOfLastWord("Hello World ") );
// console.log( lengthOfLastWord("Hello World so great") );


function lengthOfLastWord1(str) {
	if(str == null) return;
	var end = str.length - 1;
	while(end >= 0 && str.charAt(end) == " ") end --;
	if(end < 0) return 0;
	var start = end;
	while(start >= 0 && str.charAt(start) != " ") start --;
	return end - start;
}    
// console.log( lengthOfLastWord1("Hello World") );
// console.log( lengthOfLastWord1("Hello World ") );
// console.log( lengthOfLastWord1("Hello World so great") );


function lengthOfLastWord4(str) {//超出时间限制
	if(str == null) return;

	str = str.trim();
	var len = str.length;
	for(var i = len - 1; i >= 0; i ++) {
		if(str[i] == " ") {
			return length - i;
		}
	}
}
// console.log( lengthOfLastWord4("Hello World") );
// console.log( lengthOfLastWord4("Hello World ") );
// console.log( lengthOfLastWord4("Hello World so great") );
