// 正则表达式： 

// 默认是贪婪匹配：可以匹配多不匹配少

// reg方法:
// reg.test(str);
// reg.exec(str);


// 量词：
// 要匹配的表达式的的连续的个数：
// X{n}       n 个表达式连起来
// X{n,m}     n至m 个表达式连起来
// X{n,}      n至无穷 个表达式连接起来
// 即：总表达式 = 表达式 + 表达式 + ..... + 表达式 

	// var str = 'ccccccccccc';
	// var reg = /c{3}/g;
	// console.log(str.match(reg));


	// var str = 'ccccccccccc';
	// var reg = /c{3,6}/g;
	// console.log(str.match(reg));

	// var str = 'ccccccccccc';
	// var reg = /c{3,}/g;
	// console.log(str.match(reg));

// 简写：
// * ==》 X{0,}
// + ==》 X{1,}
// ? ==》 X{0,1}

	// var str = 'kkkiikkkkkiiii';
	// var reg = /k*/g;
	// console.log(str.match(reg));

	// var str = 'kkkiikkkkkiiii';
	// var reg = /k+/g;
	// console.log(str.match(reg));

	// var str = 'kkkiikkkkkiiii';
	// var reg = /k?/g;
	// console.log(str.match(reg));

// 非贪婪匹配： 可以匹配少不匹配多
// 以在表示量词后面加上一个?
	// var str = 'kkkiikkkkkiiii';
	// var reg = /k*?/g;
	// console.log(str.match(reg));

	// var str = 'kkkiikkkkkiiii';
	// var reg = /k+?/g;
	// console.log(str.match(reg));

	// var str = 'kkkiikkkkkiiii';
	// var reg = /k??/g;         //? : 一个表示量词，一个表示非贪婪匹配
	// console.log(str.match(reg));

	// 在举个例子：
	// 贪婪匹配：
	// var str = 'kkkkkkkkkkkk';
	// var reg = /k{3,4}/g;
	// console.log( str.match(reg) );

	// // 非贪婪匹配：
	// var str = 'kkkkkkkkkkkk';
	// var reg = /k{3,4}?/g;
	// console.log( str.match(reg) );

// ^X: 匹配以X开头的表达式
// X$: 匹配以X结尾的表达式
	// var str = 'aaaabdfssss';
	// var reg = /^a/g;
	// var reg = /s$/g;
	// var reg = /^a*?/g;
	// var reg = /^a?/g;
	// var reg = /^a{3,}?/g;
	// var reg = /^a{3,}/g;
	// console.log( str.match(reg) );


// 元字符：
// .: 用于查找单个字符，除了换行和行结束符。
	// var str = 'aj\nid a\ri sxh';
	// var reg = /./g;
	// console.log( str.match(reg) );

	// var str = 'aj\nid a\ri ssalnjlsns';
	// var reg = /.{1,}/g;
	// console.log( str.match(reg) );

// |: 表示或 (即 表达式1 或者 表达式2 或者 表示式3)
	// var str = 'sasbbbaaaakl';
	// var reg = /^a|b+/g;
	// console.log( str.match(reg) );

	// var str = 'bbsasbbbaaaakl';
	// var reg = /^b+|a+/g;
	// console.log( str.match(reg) );

	// var str = 'ccbbsasbbbaaaakl';
	// var reg = /b+|a+|^c+?/g;
	// console.log( str.match(reg) );

// 括号(): 表示一个表达式
	// var str = 'asbbbaaaakljabba';
	// var reg = /^a.|b./g;
	// console.log( str.match(reg) );

	// var str = 'asbbbaaaaklbaai';
	// var reg = /^(a.|b.)/g;
	// var reg = /(a.|b.)$/g;
	// console.log( str.match(reg) );

// 大括号[]: 字符集合
	// var str = 'asbb567qr38dadjaa_??klj__ab??ba';
	// var reg = /a/g;
	// var reg = /a+/g;
	// var reg = /[ab]/g; //等同于 var reg = /a|b/g; 就是一个查找的范围
	// var reg = /[a-z0-9_]{6}/g;
	// console.log( str.match(reg) );
//[^]中的^: 表示非
	// var str = 'asbBBHJHG38dadjaa_??klj__ab??ba';
	// var reg = /^a.{20}|[^a-z0-9_]{2}/g;
	// console.log( str.match(reg) );

// 边界\b与非边界\B                       block

// 数字\d与非数字\D                       digit

// 空白 \f匹配换页符，\n匹配换行符，\r匹配回车，\t匹配制表符，\v匹配垂直制表符。
// \s匹配单个空格，等同于[\f\n\r\t\v]。    space

// 单词字符\w与非单纯字符\W               word

// 反向引用： 
// \数字： “\数字”就叫做反向引用，它表示的是第n个括号内的子正则表达式匹配的内容。
	// var str = 'aaaasasadklalkkl';
	// var reg = /(\w)(\w)\1\2/g;
	// var reg = /(\w)(\w)\2\1/g;
	// var reg = /\w\w\2\1/g; //必须要有括号(),表示子表达式
	// var reg = /[a]\1/g; //必须要有括号(),表示子表达式
	// var reg = /a\1/g; //必须要有括号(),表示子表达式
	// // 所以，可以看出，实际上，
	// // .
	// // \w \W \d \D \b \B \s 
	// // [] 
	// // a b .... 1 2 3....
	// // 都是在同一个层面的东西

	// // 使用 () 括起来的 是一个子表达式
	// console.log( str.match(reg) );


// 不记录子正则表达式的匹配结果
// 使用形如(?:pattern)的正则就可以避免保存括号内的匹配结果。

// 正向预查：
// 正向预查 形式：(?=pattern) 所谓正向预查，
// 意思就是：要匹配的字符串，后面必须紧跟着pattern！

// ?!
// 形式(?!pattern)和?=恰好相反，要求字符串的后面不能紧跟着某个pattern

// 匹配元字符* + ? ....： 
	// var str = '**dja**??';
	// var reg = /^\*+|\?+/g;
	// console.log(str.match(reg));

	// var str = "(sajk)[asjk]";
	// var reg = /^\(\w+\)/g;
	// console.log(str.match(reg));

	// var str = "(sajk])[asjk]";
	// var reg = /^\(\w+\]/g;
	// console.log(str.match(reg));

	// var str = ")sajk]op)[asjk]";
	// var reg = /\).+\](?=\w)/g;
	// console.log(str.match(reg));
	// var reg = /\)\w+(?=\])/g;
	// console.log(str.match(reg));
	// // var str = ")sajk]op)[asjk]]]"; // . 不是 代表 \w 表示的范围不同
	// var reg = /\).+(?=\])/g;
	// console.log(str.match(reg));

// 正则表达式的修饰符 g i m

// 在replace函数中使用$引用子正则表达式匹配内容 
	// var str = 's0bH2s33s43jjshahuk*';
	// var reg = /(\w)(\d)/g;
	// var newStr = str.replace(reg, '--');
	// console.log(newStr);
	// var newStr = str.replace(reg, '-$1-$2');
	// console.log(newStr);
	// // 由于在替换文本里$有了特殊的含义，所以我们如果想要是用$这个字符的话，需要写成$$，
	// var newStr = str.replace(reg, '$$');
	// console.log(newStr);
