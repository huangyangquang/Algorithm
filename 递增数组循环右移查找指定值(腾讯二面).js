
// [23, 25, 45, 56, 77, 89, 1, 4]中找：89

// mid = （0 + 8） ／ 2 = 4
// midVal = 77

// 23 < 77:
// 	但是 23 - 77 之间是不包括 89，所以：区间现在从 mid - 最后一个（修改l索引为 5）

// while
// mid = （5 + 8） ／ 2 = 6
// midVal = 1

// 89 > 1:
// 	但是 1-4 之间不包括 89，所以：区间现在从 l - mid - 1 (修改索引为5)

// while
// mid = （5 + 5）／ 2 = 5
// midVal = 89
// 匹配上


// 双指针
// 通过mid来判断出target可能出现的区间范围，然后去比较，移动对应的指针
function indexOf(arr, target) {
	if(arr === null || target === null) return;

	var l = 0,
		r = arr.length,
		mid;

	while(l <= r) {
		mid = Math.floor( (l + r) / 2 ); // 数组的中间索引

		if(arr[mid] === target) { // 找到对应的值，程序出口
			return mid;
		}

		if(arr[l] < arr[mid]) { 
			if(arr[l] <= target && target < arr[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		} else {
			if(arr[mid] < target && target <= arr[r]) {
				l = mid + 1;
			} else {
				r = mid - 1
			}
		}
	}
	return -1; // 程序出口
}



