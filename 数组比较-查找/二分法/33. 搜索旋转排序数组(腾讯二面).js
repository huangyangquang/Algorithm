// 33. 搜索旋转排序数组
// 给你一个升序排列的整数数组 nums ，和一个整数 target 。

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。

// 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

 
// 示例 1：
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1

// 二分法：
// 时间复杂度： O(log n)，其中 n 为 nums[] 数组的大小。整个算法时间复杂度即为二分搜索的时间复杂度 O(logn)。
// 空间复杂度： O(1) 。我们只需要常数级别的空间存放变量。
function search(nums, target) {
	var len = nums.length

	if(len === 0) return -1
	if(len === 1) return nums[0] === target ? 0 : -1

	var l = 0,
		r = len - 1

	while(l <= r) { // 确定了某个区间，但是由于mid指的存在，所以左右区间之间切换是容易实现的; 同时，l, r的作用除了用来确认区间外，也是用来确认mid值的，同时也在缩小区间的范围
		var mid = Math.floor( (l + r) / 2 )

		if(nums[mid] === target) return mid // 通过mid值判断是否右一样地值，这是程序的一个成功找到值出口
		
		if (nums[l] == nums[mid]) { // 针对 [1,3,1,1,1], 3 这种情况
            l ++;
            continue;
        }

		if(nums[0] < nums[mid]) {
			if(nums[0] <= target && target < nums[mid]) { // 重点是在=号上，如果为false，会导致左指针向右移动
				r = mid - 1
			} else {
				l = mid + 1
			}
		} else {
			if(nums[mid] < target && target <= nums[len - 1]) { // 重点是在=号上，如果为false，会导致右指针向左移动
				l = mid + 1
			} else {
				r = mid -1
			}
		}
		// console.log(l, r)
	}
	return -1 // 这是程序的执行完成的出口
}
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([3, 1], 1))
console.log(search([1,3,1,1,1], 3)) 


// api解法：
var search1 = function(nums, target) {
    return nums.indexOf(target)
};



function search2 (arr, target) {
	var len = arr.length

	if(len === 0) return -1;
	if(len === 1) return nums[0] === target ? 0 : -1

	var l = 0, r = len - 1
	
	while(l <= r) {
		var mid = Math.floor((l + r) / 2)

		if(arr[mid] === target) return mid;

		if(arr[0] <= arr[mid]) {
			if(arr[0] <= target && target < arr[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1
			}
		} else {
			if(arr[mid] < target && target <= arr[len - 1]) {
				l = mid + 1
			} else {
				r = mid - 1
			}
		}
	}
	return -1
}
// console.log(search2([4,5,6,7,0,1,2], 0))
// console.log(search2([4,5,6,7,0,1,2], 3))
// console.log(search2([4,5,6,7,0,1,2], 2))