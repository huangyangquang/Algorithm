// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

// 示例 1:

// 输入: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// 输出: 
// 合并后的树:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
// 注意: 合并必须从两个树的根节点开始。

const Node = require('./node.js')


var node1_left = new Node(1)
var node2_left = new Node(2)
var node3_left = new Node(3)
var node5_left = new Node(5)

var node1_right = new Node(1)
var node2_right = new Node(2)
var node3_right = new Node(3)
var node4_right = new Node(4)
var node7_right = new Node(7)

node1_left.left = node3_left
node1_left.right = node2_left
node3_left.left = node5_left

node2_right.left = node1_right
node2_right.right = node3_right
node1_right.right = node4_right
node3_right.right = node7_right

// 广度优先遍历 2021.05.09
var mergeTrees = function(root1, root2) {
	if(root1 === null) return root2
	if(root2 === null) return root1

	var merged = new Node(root1.val + root2.val)
	var queue = [merged]
	var queue1 = [root1]
	var queue2 = [root2]

	while(queue1.length > 0 || queue2.length > 0) {
		var node = queue[0]
		queue = queue.splice(1)

		var node1 = queue1[0]
		queue1 = queue1.splice(1)

		var node2 = queue2[0]
		queue2 = queue2.splice(1)

		var {left: left1, right: right1} = node1
		var {left: left2, right: right2} = node2
		
		var left = null
		var right = null

		if(left1 !== null || left2 !== null) {
			if(left1 !== null && left2 !== null) {
				left = new Node(left1.val + left2.val)
				node.left = left
				queue.push(left)
				queue1.push(left1)
				queue2.push(left2)
			} else if (left1 !== null) {
				node.left = left1
			} else if (left2 !== null) {
				node.left = left2
			}
		}

		if(right1 !== null || right2 !== null) {
			if(right1 !== null && right2 !== null) {
				right = new Node(right1.val + right2.val)
				node.right = right
				queue.push(right)
				queue1.push(right1)
				queue2.push(right2)
			} else if (right1 !== null) {
				node.right = right1
			} else if (right2 !== null) {
				node.right = right2
			}
		}


	}
	
	return merged
};
// 复杂度分析
// 时间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点个数。
// 对两个二叉树同时进行广度优先搜索，只有当两个二叉树中的对应节点都不为空时才会访问到该节点，
// 因此被访问到的节点数不会超过较小的二叉树的节点数。

// 空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点个数。
// 空间复杂度取决于队列中的元素个数，队列中的元素个数不会超过较小的二叉树的节点数。

console.log( mergeTrees(node1_left, node2_right) )