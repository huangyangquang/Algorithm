// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 时间复杂度：O(N)O(N)，其中 NN 是字符串的长度。左指针和右指针分别会遍历整个字符串一次:
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const len = s.length;

    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, res = 0;

    // i是左指针
    for (let i = 0; i < len; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        res = Math.max(res, rk - i + 1);
    }

    return res;
};
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("ppppppp"))



// 2020.11.06
function longest(str) {
	if(str === null || str.length === 0) return 0

	let r = -1,
		len = str.length,
		set = new Set(),
		max = 0

	for(var i = 0; i < len; i ++) {
		if(i != 0) {
			set.delete(str[i - 1])
		}

		while(r + 1 < len && !set.has(str[r + 1])) {
			set.add(str[r + 1])
			r ++
		}

		max = Math.max(max, r - i + 1)
	}

	return max
}





























