function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

e.right = h;

var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('修改看看');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('修改来来');
var g1 = new Node('g');
var h1 = new Node('h');
var i1 = new Node('i， 新增的');


a1.left = c1;
a1.right = b1;

c1.left = f1;
c1.right = g1;

// b1.left = d1;
b1.right = e1;

e1.left = i1;
e1.right = h1;



// diff算法：
function diffTree(root1, root2, diffList) {
	// console.log(root1.value, root2.value);
	if(root1 == root2) return diffList;
	if(root1 == null && root2 != null) { //新增了节点
		diffList.push({
			type: '新增',
			origin: null,
			now: root2
		})
	} else if(root1 != null && root2 == null){//删除了节点
		diffList.push({
			type: '删除',
			origin: root1,
			now: null
		})
	} else if(root1.value != root2.value) {//相同位置的节点不同了，修改了节点
		diffList.push({
			type: '修改',
			origin: root1,
			now: root2
		})
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList);
	} else {
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList);
	}
	return diffList;
}

var diffList = [];
diffTree(a, a1, diffList);
console.log(diffList);