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

// 动态规划：
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome1 = function (s) {
    if (s === null) return '';

    var len = s.length;
    var mLen = 1 // 存储最长回文子串的长度
    var begin = 0 // 存储最长回文子串的起始点
    var tempArr = new Array(len)

    // 初始化二位数组
    for (var i = 0; i < len; i ++) {
        tempArr[i] = new Array(len)
    }

    for (var j = 0; j < len; j ++) { // 长
        for (var i = 0; i <= j; i ++) { // 短
            if (s[j] !== s[i]) {
                tempArr[i][j] = false
            } else {

                if (j - i < 2) {
                    tempArr[i][j] = true
                } else {
                    tempArr[i][j] = tempArr[i + 1][j - 1]
                }

                if (tempArr[i][j] === true && j - i + 1 >= mLen) {
                    mLen = j - i + 1
                    begin = i
                }
            }
        }
    }
    
    return s.slice(begin, begin + mLen)
  };
  
  console.log(longestPalindrome1("babaaaaabd"));
  console.log(longestPalindrome1("cbbd"));
  console.log(longestPalindrome1("q"));
  console.log(longestPalindrome1("ac"));
  console.log(longestPalindrome1("acdd"));
  console.log(longestPalindrome1("acdddc"));
  console.log(longestPalindrome1("abbajjjjjjooopoooppppoooppooo"));