// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
// 说明:

// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

var node1 = new Node(1);
var node2_1 = new Node(2);
var node2_2 = new Node(2);
var node3_1 = new Node(3);
var node3_2 = new Node(3);
var node4_1 = new Node(4);
var node4_2 = new Node(4);


node1.left = node2_1;
node1.right = node2_2; 

// node1.right = node3_1

node2_1.left = node3_1;
node2_2.right = node3_2;
node2_1.right = node4_1;
node2_2.left = node4_2;

function isSymmetric(root) {
	if(root == null) return true;
	var children = [root.left, root.right];
	while(children.length > 0) {
		var temp = [];
		var len = children.length;
		console.log(children);
		for(var i = 0; i < len; i ++) {
			var curOne = children[i];
			var sideOne = children[len - 1 - i];
			if((curOne == null && sideOne !== null) || (curOne !== null && sideOne == null)) {
				return false;
			} else {
				if(curOne && sideOne && curOne.val !== sideOne.val) {
					return false;
				} else if(curOne && sideOne && curOne.val == sideOne.val) {
					temp.push(curOne.left);
					temp.push(curOne.right);
				}
			}
		}
		children = temp;
	}
	return true;
}

// console.log( isSymmetric(node1) );

// 递归写法
function isSymmetric1(root) {
	if(root == null) return true;
	var left = root.left;
	var right = root.right;
	// 两个都为真
	if (left == null && right == null) return true;
	// 两个或者一个为真
    if (left == null || right == null) return false;
    // 值不一样时
    if (left.val !== right.val) return false;
	return isSymmetric1({left: left.left, right: right.right}) && isSymmetric1({left: left.right, right: right.left});	
}
console.log( isSymmetric1(node1) );

// 迭代写法
function isSymmetric(root) {
	if(root == null) return true;
	var temp = [root, root];
	while(temp.length > 0) {
		var r = temp.pop();
		var l = temp.pop();
		if(r == null && l == null) continue;
		if(r == null || l == null) return false;
		if(r.val !== l.val) return false;
		// 镜像
		temp.push(l.left);
		temp.push(r.right);
		temp.push(l.right);
		temp.push(r.left);
	}
	return true;
}
