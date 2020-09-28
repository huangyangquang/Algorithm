// 290. 单词规律
// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false
// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    

// indexOf 下标索引
const wordPattern1 = function(pattern, str) {
    if(pattern == null || str == null) return false;

    const strArr = str.split(" "),
        patternLen = pattern.length,
        strLen = strArr.length;

    if(patternLen !== strLen) return false;

    for(let i = 0; i < patternLen; i ++) {
        if(strArr.indexOf(strArr[i]) !== pattern.indexOf(pattern[i])) {
            return false;
        }
    }

    return true;
}
console.log( wordPattern1("abba", "dog c d dog") );


// Map映射
const wordPattern2 = function(pattern, str) {
    if(pattern == null || str == null) return;
    const strArr = str.split(' '),
        len = strArr.length,
        strMap = new Map(),
        patternMap = new Map();

    
    if(len !== pattern.length) return false;

    for(let i = 0; i < len; i ++) {

        if(strMap.has(strArr[i])) {
            if(strMap.get(strArr[i]) !== pattern[i]) {
                return false;
            }
        } else {
            strMap.set(strArr[i], pattern[i]);
        }

        if(patternMap.has(pattern[i])) {
            if(patternMap.get(pattern[i]) !== strArr[i]) {
                return false;
            } 
        } else {
            patternMap.set(pattern[i], strArr[i]);
        }
    }
    return true;
}
console.log( wordPattern2("abbac", "dog d d dog") )