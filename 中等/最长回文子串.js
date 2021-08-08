// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"

// 示例 3：
// 输入：s = "a"
// 输出："a"

// 示例 4：
// 输入：s = "ac"
// 输出："a"


/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展法：
 var longestPalindrome = function(s) {
    var len = s.length
    var res = ''

    if (len < 2) {
        return s
    }

    for(var i = 0; i < len; i ++) {
        helper(i, i)
        helper(i, i + 1)
    }

    function helper (m, n) {
        // m >= 0 && n < len: 这里的限制是为了使得m,n符合字符串的索引, 保证s[m],s[n]可以取到值
        while(m >= 0 && n < len && s[m] === s[n]) {
            m --
            n ++
        }
        
        // 为什么是n - m - 1呢？
        // 因为跳出while时，就表示m, n两个值是不符合要求的。
        // m,n两个边界不能取 所以应该取m+1到n-1的区间,所以长度是 (m + 1) - (n - 1) + 1 = m - n - 1
        // 这里 最后要 + 1，是因为我是计算字符串的个数（长度）的
        // 比如：'abc'， 当m = 0, n = 2时，是不满足要求的，所以符合要求的字符串只有'a'， 长度为1; 故为 n - m - 1
        if(n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }

    return res
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('q'));
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('acdd'));
console.log(longestPalindrome('acddc'));
console.log(longestPalindrome('abbajjjjjjooopoooppppoooooo'));



