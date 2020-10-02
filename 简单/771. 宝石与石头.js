// 771. 宝石与石头
//  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

// 示例 1:
// 输入: J = "aA", S = "aAAbbbb"
// 输出: 3

// 示例 2:
// 输入: J = "z", S = "ZZ"
// 输出: 0

// 双重for循环：
function numJewelsInStones(J, S) {
	if(J === null || S === null) return;
	var Jarr = J.split(''),
		Sarr = S.split(''),
		num = 0;

	Jarr.forEach(j => {
		Sarr.forEach(s => {
			if(j === s) {
				num ++;
			}
		})
	})

	return num;
}
console.log( numJewelsInStones("aA", "aAAbbbb") );

// 一次for循环：
function getNum(J, S) {
	if(J === null || S === null) return;

	var Sarr = S.split(''),
		len = Sarr.length,
		num = 0;

	for(var i = 0; i < len; i ++) {
		if(J.indexOf(Sarr[i]) > -1) {
			num ++;
		}
	}

	return num;
}
console.log( getNum("aA", "aAAbbbb") );

function _getnum(J, S) {
	if(J === null || S === null) return;
	var res = 0;
	for(var s of S) {
		res = J.includes(s) ? res + 1 : res;
	}
	return res;
}
console.log( _getnum("aA", "aAAbbbb") );




