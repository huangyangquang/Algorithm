// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true


/**
 * @param {string} s
 * @return {boolean}
 */
// 时间复杂度： O(n)

var isValid = function(s) {
    if(s === null || s.length % 2 === 1) return false;
    if(s === '') return true;
    const strObj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = [s[0]];
    const len = s.length;

    for(let i = 1; i < len; i ++) {
        if(strObj[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0 ? true : false;
};