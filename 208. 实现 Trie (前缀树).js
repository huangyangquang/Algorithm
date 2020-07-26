// 208. 实现 Trie (前缀树)
// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

// 示例:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");   
// trie.search("app");     // 返回 true
// 说明:

// 你可以假设所有的输入都是由小写字母 a-z 构成的。
// 保证所有输入均为非空字符串。


// 方法二：
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.map = new Map();
    this.endMap = new Set();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let map = this.map;
    for (const c of word) {
        if (!map.has(c)) {
            map.set(c, new Map());
        }
        map = map.get(c);
    }
    this.endMap.add(map);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let map = this.map;
    for (const c of word) {
        if (map.has(c)) {
            map = map.get(c);
        } else {
            return false;
        }
    }
    return this.endMap.has(map);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let map = this.map;
    for (const c of prefix) {
        if (map.has(c)) {
            map = map.get(c);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */





// // 方法一：
// /**
//  * Initialize your data structure here.
//  */
// var Trie = function() {
// 	this.tree = []
// };

// /**
//  * Inserts a word into the trie. 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
// 	this.tree.push(word);
// };

// /**
//  * Returns if the word is in the trie. 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
// 	return this.tree.some(ele => {
// 		return ele == word;
// 	})
// };

// /**
//  * Returns if there is any word in the trie that starts with the given prefix. 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
// 	return this.tree.some(ele => {
// 		return ele.indexOf(prefix) == 0;
// 	})
// };

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */
























