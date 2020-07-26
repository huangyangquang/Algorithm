// 冒泡排序
function sort(arr) {
	if(arr == null || arr.length == 0) return;
	for(var i = 0; i < arr.length; i ++) {
		for(var j = 0; j < arr.length - 1 - i; j ++) {
			if(arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

// 选择排序
function sort1(arr) {
	if(arr == null || arr.length == 0) return;
	for(var i = 0; i < arr.length; i ++) {
		var max = 0;
		for(var j = i + 1; j < arr.length; j ++) {
			if(arr[max] < arr[j]) {
				max = j;
			}
		}
		var temp = arr[max];
		arr[max] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
}

// 快速排序
function sort2(arr) {
	if(arr == null || arr.length) return;
	var temp = arr[0];
	var left = [];
	var right = [];
	for(var i = 1; i < arr.length; i ++) {
		if(arr[i] < temp) {
			left.push(arr[i])
		} else {
			right.push(arr[i]);
		}
	}
	left = sort2(left);
	right = sort2(right);
	return left.concat([temp], right);
}

// var arr = [2, 8, 3, 4, 9, 0, 1];
// console.log(sort2(arr));
// console.log(arr);


