// 228. 汇总区间
// 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

// 示例 1:
// 输入: [0,1,2,4,5,7]
// 输出: ["0->2","4->5","7"]
// 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。

// 示例 2:
// 输入: [0,2,3,4,6,8,9]
// 输出: ["0","2->4","6","8->9"]
// 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。


let summaryRanges = function(nums) {
  let start = 0
  let end = 0
  let ans = []
  nums.push(Infinity) //我他妈直接抄小路因为我们要判断nums[i+1]，只能遍历到nums.length-1。后续处理比较麻烦，不如直接给它加个无穷大
  for(let i=0;i<nums.length-1;i++){
    //扩大区间
    end = i
    if(nums[i]+1!=nums[i+1]){
      // 这里需要断开一个区间
      if(start===end){
        //相等，那就只保存这个数
        ans.push(nums[end]+'')
      }else{
        ans.push(nums[start]+'->'+nums[end])
      }
      //重置新区间，新区间要从下一个开始
      start = end = i+1
    }
  }
  return ans
};

var res = summaryRanges([0,1,2,4,5,7])
console.log(res);


// 总结：
// 区间查找，可以使用双指针来解决