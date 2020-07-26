function compare(a, b) {
	return a - b > 0 ? true : false;
}

function exchange(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

// 选择排序： 
// 进行len轮比较，每一轮选出一个最大的（最小的）放在数组的最后面
// 这个最大的（最小值）的索引由index来表示，index默认是0
function selectSort(arr) {
	if(arr == 0 || arr.length <= 1) return arr;
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		var index = 0;
		for(var j = 0; j < len - i; j ++) {
			if(compare(arr[index], arr[j])) {
				index = j;
			}
		}
		// 继续len轮比较，每一轮选出一个最大的（最小的）放在数组的最后面
		// console.log(arr[index]);
		exchange(arr, index, len - 1 -i);
	}
}
// var arr = [12, 45, 13, 12, 3, 0, 8, 98];
// selectSort(arr);
// console.log(arr);

// 冒泡排序：
function boobleSort(arr) {
	if(arr == null || arr.length <= 1) return arr;
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		for(var j = 0; j < len - 1 - i; j ++) {
			if(compare(arr[j], arr[j + 1])) {
				exchange(arr, j, j + 1);
			}
		}
	}
}
// var arr = [12, 45, 13, 12, 3, 0, 86, 98];
// boobleSort(arr);
// console.log(arr);

// 快速排序：
function quickSort(arr) {
	if(arr == null || arr.length <= 1) return arr;
	var left = [];
	var right = [];
	var mid = arr[0];
	var len = arr.length;
	for(var i = 1; i < len; i ++) {
		if( compare(arr[i], mid) ) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	left = quickSort(left);
	right = quickSort(right);
	return left.concat([mid], right);
}
// var arr = [12, 45, 13, 12, 3, 0, 86, 98];
// console.log( quickSort(arr) );



















