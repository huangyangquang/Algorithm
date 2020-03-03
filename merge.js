// 88. 合并两个有序数组
// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

// 1.合并后排序
function merge(arr1, m, arr2, n) {
	if(arr1 == null || m == null || arr2 == null || n == null) return;
	if(arr1.length == 0 && arr2.length != 0) return arr2;
	if(arr1.length != 0 && arr2.length == 0) return arr1;
	// 1.1
	// var i = 0;
	// arr1.forEach(function(ele, index, self) {
	// 	if(ele == 0 && i < n) {
	// 		self[index] = arr2[i];
	// 		i ++;
	// 	}
	// });
	// return arr1.sort(function(a, b) {
	// 	return a - b;
	// });

	// 1.2
	var newArr = arr1.slice(0, m).concat(arr2);
	return newArr.sort(function(a, b) {
		return a - b;
	})
}
// console.log( merge([-10,1,2,0,3,0,0,0], 5, [2, 5, 6], 3) );

// 2.双指针 / 从前往后
function merge1(arr1, m, arr2, n) {
	if(arr1 == null || m == null || arr2 == null || n == null) return;
	
	var smallArr1 = arr1.slice(0, m);
	var p1 = 0;
	var p2 = 0;
	var sP = 0;

	while( (p2 < n) && (sP < m) ) {
		if(arr2[p2] > smallArr1[sP]) {
			arr1[p1 ++] = smallArr1[sP];
			sP ++;
		} else {
			arr1[p1 ++] = arr2[p2];
			p2 ++;
		}
	}

	if(p2 < n) {
		var tempArr = arr2.slice(p2);
		arr1.splice(m + n - p2 - 1, p2 + 1);
	}

	if(sP < m) {
		var tempArr = smallArr1.slice(sP)
		arr1.splice(m + n - sP - 1, sP + 1);
	}

	return arr1.concat(tempArr);
}

console.log( merge1([1,2,3,0,0,0], 3, [2, 5, 6], 3) );
console.log( merge1([0], 0, [2], 1) );


// 3.双指针 / 从后往前
function merge2(arr1, m, arr2, n) {
	if(arr1 == null || m == null || arr2 == null || n == null) return;

	var len = m + n - 1;
	var p1 = m - 1;
	var p2 = n - 1;

	while(p1 >= -1 && p2 >= 0) {
		if(arr1[p1] > arr2[p2]) {
			arr1[len --] = arr1[p1];
			p1 --;
		} else {
			arr1[len --] = arr2[p2];
			p2 --;
		}
		
	}
	return arr1;
}