// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

// 输入：
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 输出：[3, 14.5, 11]
// 解释：
// 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。

function Node (val) {
	this.val = val
	this.left = null
	this.right = null
}


var node3 = new Node(3)
var node9 = new Node(9)
var node20 = new Node(20)
var node15 = new Node(15)
var node7 = new Node(7)

node3.left = node9
node3.right = node20

node20.left = node15
node20.right = node7


// 2021.05.08: 广度优先遍历
var averageOfLevels = function(root) {
	if (root === null) return;

	var queue = [root]
	var sum = 0
	var len = 0
	var temp = 0
	var res = []

	while(queue.length > 0) {
		sum = 0
		len = queue.length
		temp = queue.length

		while(temp > 0) {
			sum = sum + queue[0].val

			if(queue[0].left !== null) {
				queue.push(queue[0].left)
			}

			if(queue[0].right !== null) {
				queue.push(queue[0].right)
			}

			queue.shift()
			temp --
		}

		res.push(sum / len)
	}

	return res;
};
console.log( averageOfLevels(node3) )





