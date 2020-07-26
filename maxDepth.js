// // 104. 二叉树的最大深度

// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 最大深度
function maxDepth(root) {
	if(root == null) return 0;
	var height1 = maxDepth(root.left) + 1;
	var height2 = maxDepth(root.right) + 1;
	var height = Math.max(height1, height2);
	return heigh;
}

// 最小深度
var minDepth = function(root) {
	if(root == null) return 0;

	if(root.left == null && root.right == null) return 1;

	let min_depth = Number.MAX_VALUE;

	if(root.left != null) {
		min_depth = Math.min(minDepth(root.left), min_depth);
	}

	if(root.right != null) {
		min_depth = Math.min(minDepth(root.right), min_depth);
	}

	// 根节点（或者说是上层节点）
	return min_depth + 1;
};
