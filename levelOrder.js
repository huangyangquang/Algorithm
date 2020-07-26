// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 
// （即逐层地，从左到右访问所有节点）。

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]


// 递归
function levelOrder(root) {
	if(root == null) return [];
	function _helper(node, level) {
		if(levels.length == level) levels.push([]);

		levels[level].push(node.val);

		if (node.left != null)
	    	_helper(node.left, level + 1);
		if (node.right != null)
		    _helper(node.right, level + 1);
	}
	var levels = [];
	_helper(root, 0);
    return levels;
}


function levelOrder(root) {
	if(root == null) return [];
	var arr = [];
	var _helper = function(node, nowlevel) {
		if(arr.length == nowlevel) arr.push([]);

		arr[nowlevel].push(node.val);

		// 出口
		node.left && _helper(node.left, nowlevel + 1);
		node.right && _helper(node.right, nowlevel + 1);
	}
	_helper(root, 0);
	return arr;
}




// 迭代
function levelOrder(root) {
	if(root ==  null) return [];
	var arr = [];
	var queue = [root];

	while(queue.length > 0) {
		var tempArr = [];
		var tempQ = [];
		for(var node of queue) {
			tempArr.push(node.val);
			if(node.left) {
				tempQ.push(node.left);
			}
			if(node.right) {
				tempQ.push(node.right);
			}
		}
		queue = tempQ;
		arr.push(tempArr);
	}
	return arr;
}