// 455. 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。
// 如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，
// 并输出这个最大数值。

// 注意：
// 你可以假设胃口值为正。
// 一个小朋友最多只能拥有一块饼干。

// 示例 1:
// 输入: [1,2,3], [1,1]
// 输出: 1
// 解释: 
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。

// 示例 2:
// 输入: [1,2], [1,2,3]
// 输出: 2
// 解释: 
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.


// 2021.05.06 （新思路）
// 排序 + 贪心算法：
// 《算法导论》： 
// 贪心算法（greedy algorithm）就是这样的算法，它在每一步都做出当时看起来最佳的选择。
// 也就是说，它总是做出局部最优的选择，寄希望这样的选择能导致全局最优解。
function cookieNew (kids, cookies) {
	if(kids === null || cookies === null) return

	kids.sort((a, b) => {
		return a - b
	})
	
	cookies.sort((a, b) => {
		return a - b
	})

	let num = 0

	cookies.forEach(cookie => {
		if(cookie >= kids[num]) {
			num ++
		}
	})

	return num
}
console.log( cookieNew([1,2,3], [1,1]) )
console.log( cookieNew([1,2], [1,2,3]) )


// 2021.05.06
function cookie(kids, cookies) {
	if(kids === null || cookies === null) return

	kids.sort((a, b) => {
		return a - b
	})
	
	cookies.sort((a, b) => {
		return a - b
	})
	
	let sum = 0
	let k = 0
	let c = 0

	while(k <= kids.length && c <= cookies.length) {
		if(kids[k] <= cookies[c]) {
			sum ++
			c ++
			k ++
		} else {
			c ++
		}
	} 
	
	return sum
}
console.log( cookie([1,2,3], [1,1]) )
console.log( cookie([1,2], [1,2,3]) )


// 第一版
function findContentChildren(kids, cookies) {
	if(kids === null || cookies === null) return;

	kids.sort((a, b) => (a - b));
	cookies.sort((a, b) => (a - b));

	var sum = 0,
		k = 0,
		c = 0;

	while(k <= kids.length && c <= cookies.length) {
		if(kids[k] <= cookies[c]) {
			sum ++;
			k ++;
			c ++;
		} else {
			c ++;
		}
	}

	return sum;
}
console.log( findContentChildren([1,2,3], [1,1]) )
console.log( findContentChildren([1,2], [1,2,3]) )



// 2020.10.28
function find(kids, cookies) {
	kids.sort((a, b) => (a - b))
	cookies.sort((a, b) => (a - b))

	var k = 0,
		c = 0,
		sum = 0;

	while(k <= kids.length && c <= cookies.length) {
		if(cookies[c] >= kids[k]) {
			c ++
			k ++
			sum ++
		} else {
			c ++
		}
	}

	return sum;
}
console.log( find([1,2,3], [1,1]) )
console.log( find([1,2], [1,2,3]) )




























