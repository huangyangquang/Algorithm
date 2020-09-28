// 491. 递增子序列
// 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。

// 示例:

// 输入: [4, 6, 7, 7]
// 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
// 说明:

// 给定数组的长度不会超过15。
// 数组中的整数范围是 [-100,100]。
// 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。


// 去重 + 深度优先搜索(递归) + 节点切换(栈)
function findSub(nums) {
  if(nums === null || nums.length <= 1) return nums; // 严谨性判断
  const res = [],
    set = new Set(),
    len = nums.length;

    function dfs(start, path) {
      
      if(path.length >= 2) { // 递增子序列的长度至少是2
        const str = path.join(',');
        if(!set.has(str)) { // 判断重复
          set.add(str);
          res.push(path.slice()); // 拷贝副本
        }
      }

      for(let i = start; i < len; i ++) {
        const prev = path[path.length - 1];
        const cur = nums[i];
        if(path.length === 0 || prev <= cur) { // 边缘判断：初始化时 ／ 递增情况
          path.push(cur); // 切入当前节点, 初始化时就是数组的第一个
          dfs(i + 1, path); // 深入优先搜索
          path.pop(); // 切出当前节点
        }
      }
    }

    dfs(0, []);
  return res;
}
console.log( findSub([4, 6, 7, 7]) )


