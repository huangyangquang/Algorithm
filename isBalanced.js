// 110. 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:
// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:
// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。

// 方法一：
function getDeep(root) {
  if(root == null) return 0;
  let numl = getDeep(root.left);
  let numr = getDeep(root.right);
  return Math.max(numl, numr) + 1;
}

function isBalanced(root) {
  if(root == null) return true;
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if(Math.abs(leftDeep - rightDeep) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}


// 方法二：
var isBalanced1 = function(root) {
    return checkBalanced(root) != -1;
};

var checkBalanced = function(root){
    if (root == null) return 0;
    let left = checkBalanced(root.left);
    if (left == -1) return -1;
    let right = checkBalanced(root.right);
    if (right == -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left,right) + 1 : -1;
};













