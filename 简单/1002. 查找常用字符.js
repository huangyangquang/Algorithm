// 1002. 查找常用字符
// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
// 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。


// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]

function getCommon(a, b) {
	const map = new Map(),
		aLen = a.length,
		bLen = b.length,
		res = [];

	for(let i = 0; i < aLen; i ++) {
		let aNum = map.get(a[i]);
		if(aNum) {
			map.set(a[i], aNum + 1)
		} else {
			map.set(a[i], 1)
		}
	}

	for(let j = 0; j < bLen; j ++) {
		let bNum = map.get(b[j]);
		if(bNum) {
			res.push(b[j]);
			map.set(b[j], bNum - 1);
		}
	}

	return res;
}


function findStr(A) {
	return A.reduce((a, b) => {
		return getCommon(a, b);
	})
}

console.log( findStr(["cool","lock","cook"]) );
console.log( findStr(["bella","label","roller"]) );



