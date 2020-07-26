// 100. 相同的树
// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1:
// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true

// 示例 2:
// 输入:      1          1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// 输出: false

// 示例 3:
// 输入:       1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// 输出: false


// 以例子2，3来讲解：
// 深度优先搜索
function isSameTree(p, q) {
	// 这一句必须写在最前面
	if(p == null && q == null) return true;
	if(p == null || q == null) return false;
	// 为什么不能单纯的判断if(p.val == q.val) return true; ??
	if(p.val !== q.val) return false;
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	// return 
	// isSameTree(p.left.left, p.left.right) &&    
	// isSameTree(q.left.left, q.left.right) &&     
	// isSameTree(q.left.left, q.left.right) &&
	// isSameTree(p.right.left, p.right.right) &&
}

function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var p = new Node(1);
p.left = new Node(2);
p.right = new Node(3); 

var q = new Node(1);
q.left = new Node(2);
q.right = new Node(3);

// console.log(p, q);
console.log( isSameTree1(p, q) );


// 迭代：
// 判断两个节点是不是一样的（左右孩子, 值）
function check(p, q) {
	if(p == null && q == null) return true;
	if(p == null || q == null) return false;
	if(p.val != q.val) return false;
	return true;
}

function isSameTree1(p, q) {
	if (p == null && q == null) return true;
	// 判断根节点
    if (!check(p, q)) return false;
    // 根节点放入队列中
    var depP = [p];
    var depQ = [q];
    // 循环
    while(depP.length !== 0) {
    	// 取出队头元素
    	p = depP.shift();
    	q = depQ.shift();
    	// console.log(p, q);
    	// 判断两个节点是不是相等
    	if (!check(p, q)) return false;
    	// console.log(1);
    	if(p !== null) {
    		// 如果两棵树的左孩子都相等，就继续往下判断
    		// 两颗树的左孩子相等有两种情况：都是null 或者是 值val 相等
    		if (!check(p.left, q.left)) return false;
    		if (p.left != null) {
	          depP.push(p.left);
	          depQ.push(q.left);
	        }
	        // 同上
	        if (!check(p.right, q.right)) return false;
	        if (p.right != null) {
	          depP.push(p.right);
	          depQ.push(q.right);
	        }
    	}
    }
    return true;
}