// 257. 二叉树的所有路径
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

// 递归
function binaryTreePaths(root) {
	if(root == null) return [];
	if(root.left == null && root.right == null) return [`${root.val}`];
	var leftPath = binaryTreePaths(root.left);
	var rightPath = binaryTreePaths(root.right);
	leftPath.forEach(function(ele, index, self) {
		self[index] = `${root.val}->${ele}`;
	});
	rightPath.forEach(function(ele, index, self) {
		self[index] = `${root.val}->${ele}`;
	})
	return [...leftPath, ...rightPath];
}

// 迭代
