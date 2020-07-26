// 105. 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 方法一：
function Node(v) {
	this.val = v;
	this.left = null;
	this.right = null
}

var buildTree = function(preorder, inorder) {
	if(preorder == null || inorder == null 
		|| preorder.length !== inorder.length
		|| preorder.length == 0 || inorder.length == 0) return null;

	// 获取根节点
	var root_value = preorder[0];
	var root = new Node(root_value);
	var root_index_inorder = 0;
	inorder.forEach(function(ele, index) {
		if(ele == root_value) {
			root_index_inorder = index;
		}
	})

	// 获取左子树 递归
	root.left = buildTree(preorder.slice(1, root_index_inorder + 1), inorder.slice(0, root_index_inorder));

	// 获取右子树 递归
	root.right = buildTree(preorder.slice(root_index_inorder + 1, preorder.length), inorder.slice(root_index_inorder + 1, inorder.length))

	// 返回根节点
	return root;
};

function buildTree(preorder, inorder) {
	// 严谨性判断
	if(preorder == null || inorder == null 
		|| preorder.length !== inorder.length
		|| preorder.length == 0 
		|| inorder.length == 0) return null;

	let preIndex = 0;
	
	// 构建一个映射表, 方便查找
	const inMap = {};
	inorder.forEach((ele, index) => {
		inMap[ele] = index;
	})

	const help = (left, right) => {
		// 出口
		if(left == right) return null;
		// 节点的值，按顺序获取到preorder里的值，然后查找映射表，实际上就是分割inorder
		const val = preorder[preIndex ++];
		// 分割点，通过查找映射表
		const sliceIndex = inMap[val];
		// 返回一个节点 递归
		return {
			val: val,
			left: help(left, sliceIndex),
			right: help(sliceIndex + 1, right)
		}
	}

	return help(0, inorder.length);
}