// 107. 二叉树的层次遍历 II
// 给定一个二叉树，返回其节点值自底向上的层次遍历。 
// （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

function levelOrderBottom(root) {
	if(root == null) return [];
	var arr = [[root.val]];
	var queue = [[root]];
	while(queue.length > 0) {
		var kids = queue.shift();
		var tempArr = [];
		var tempQueue = [];
		while(kids.length > 0) {
			kid = kids.shift();
			if(kid.left) {
				tempArr.push(kid.left.val);
				tempQueue.push(kid.left);
			}
			if(kid.right) {
				tempArr.push(kid.right.val);
				tempQueue.push(kid.right);
			}
		}
		tempQueue.length !== 0 && queue.push(tempQueue);
		tempArr.length !== 0 && arr.unshift(tempArr);
	}
	return arr;
}


function levelOrderBottom(root) {
	if(root == null) return [];
	const arr = [];
	let queue = [root];
	while(queue.length) {
		let tempArr = [];
		let tempQueue = [];
		queue.forEach(function(ele) {
			tempArr.push(ele.val);
			ele.left && tempQueue.push(ele.left);
			ele.right && tempQueue.push(ele.right);
		})
		arr.unshift(tempArr);
		queue = tempQueue;
	}
	return arr;
}















function levelOrderBottom(root) {
	if (root === null) return [];

	let queue = [root];
	const result = [];

	while (queue.length) {
		const temp = [];
		const queueTemp = []
		for (const item of queue) {
			temp.push(item.val)
			if (item.left !== null) queueTemp.push(item.left);
			if (item.right !== null) queueTemp.push(item.right);
		}
		result.unshift(temp)
		queue = queueTemp
	}

	return result
}


