// 顺序查找 O(n)

// 二分查找
function binary_find(arr, val) {
	if(arr == null || arr.length == 0 || val == null) return -1;
	var start = 0;
	var end = arr.length - 1;
	while(start <= end) {
		var middle = start + Math.floor((end - start) / 2);
		if(val == arr[middle]) {
			return middle;
		} else if(val > arr[middle]) {
			start = middle + 1;
		} else if(val < arr[middle]) {
			end = middle - 1;
		}
	}
	return -1;
}

// var arr = [1, 2, 45, 65, 88, 90, 91, 100];
// console.log(binary_find(arr, 45));

// 二叉树查找 (二叉排序树的定义)
function binaryTree_find(root, val) {
	if(root == null || val == null) return -1;
	if(root.value == val) {
		return root;
	} else if(root.value > val) {
		return binaryTree_find(root.left, val);
	} else if(root.value < val) {
		return binaryTree_find(root.right, val);
	}
}

// function Node(val) {
// 	this.value = val;
// 	this.left = null;
// 	this.right = null;
// }

// var node40 = new Node(40);
// var node50 = new Node(50);
// var node30 = new Node(30);
// var node20 = new Node(20);
// var node31 = new Node(31);
// var node48 = new Node(48);
// var node51 = new Node(51);

// node40.left = node30;
// node40.right = node50;

// node50.left = node48;
// node50.right = node51;

// node30.left = node20;
// node30.right = node31;

// console.log(binaryTree_find(node40, 31))

