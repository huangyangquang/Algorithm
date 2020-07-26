// 小Q最近遇到了一个难题：把一个字符串的大写字母放到字符串的后面，
// 各个字符的相对位置不变，且不能申请额外的空间。


// 输入描述:
// 输入数据有多组，每组包含一个字符串s，且保证:1<=s.length<=1000.
  

// 输出描述:
// 对于每组数据，输出移位后的字符串。


// 输入例子1:
// AkleBiCeilD

// 输出例子1:
// kleieilABCD

// 通过，但是我创建了一个空间
// while(line=readline()){
//     if(line.length >= 1 && line.length <= 1000) {
//     	var strArr = line.trim().split('');
// 		var len = strArr.length;
// 		for(var i = 0; i < len; i ++) {
// 			if(strArr[i] >= 'A' && strArr[i] <= 'Z') {
// 				strArr.push(strArr[i])
// 				strArr.splice(i, 1, "");
// 			}
// 		}
// 		console.log(strArr.join(""));
//     }
// }

// xain:868599228

// yuan:182114273

// 通过
while(line = readline()) {
	if(line.length >= 1 && line.length <= 1000) {
        //先去掉字符串前面的制表符
        line = line.trim();
        //字符串长度
		var len = line.length;
        //遍历每一个出字符元素
		for(var i = 0; i < len; i ++) {
			if(line[i] >= 'A' && line[i] <= 'Z') {
                //如果是大写的字母，，就拼接在字符串的后面
				line += line[i];
                //大写字符原来的位置使用空字符串替换掉，（不是空格字符串）
				line = line.replace(line[i], '');
                //因为大写字母被替换掉了，所以原来字符串长度会减少一个；而且这个i 的代表的是下一个循环的i的值，所以 i 要 --；与 i++ 互相抵消
                len --;
                i --;
			}
		}
	}
    // 最后输出
	console.log(line);
}