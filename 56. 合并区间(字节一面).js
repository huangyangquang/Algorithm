// 56. 合并区间
// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:
// 输入: arr = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 示例 2:
// 输入: arr = [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。


var merge = function(arr) {
    if(arr === null || arr.length === 0) return [];

    var arrSort = arr.sort((a, b) => a[0] - b[0]), // 排序
        len = arrSort.length,
        res = [arrSort[0]];

    for(var i = 0; i < len; i ++) {
        if(arrSort[i][0] > res[res.length - 1][1]) {
            res.push(arrSort[i]);
        } else {
            res[res.length - 1][1] = Math.max(arrSort[i][1], res[res.length - 1][1]);
        }
    }

    return res;
};
console.log( merge([[1,4],[4,5]]) )
console.log( merge([[1,3],[2,6],[8,10],[15,18]]) )


// 2020.10.10
function _merge(arr) {
    if(arr === null) return;
    var arrSort = arr.sort((a, b) => a - b),
        len = arr.length,
        res = [arrSort[0]];

    for(var i = 1; i < len; i ++) {
        if(res[res.length - 1][1] < arr[i][0]) {
            res.push(arr[i]);
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
        }
    }

    return res;
}
console.log( _merge([[1,4],[4,5]]) )
console.log( _merge([[1,3],[2,6],[8,10],[15,18]]) )
























