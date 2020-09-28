// 56. 合并区间
// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 示例 2:
// 输入: intervals = [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。


var merge = function(intervals) {
    if(intervals === null || intervals.length === 0) return [];

    var intervalsSort = intervals.sort((a, b) => a[0] - b[0]);
    var len = intervalsSort.length;
    var res = [intervalsSort[0]];

    for(var i = 0; i < len; i ++) {
        if(intervalsSort[i][0] > res[res.length - 1][1]) {
            res.push(intervalsSort[i]);
        } else {
            res[res.length - 1][1] = Math.max(intervalsSort[i][1], res[res.length - 1][1]);
        }
    }

    return res;
};
console.log( merge([[1,4],[4,5]]) )
console.log( merge([[1,3],[2,6],[8,10],[15,18]]) )




function isContain(preArr, nextArr) {
    return preArr.some(pre => {
            return nextArr.some(next => {
                return pre >= next;
            })
        })
}