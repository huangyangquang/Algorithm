// 606. 根据二叉树创建字符串
// 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

// 空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

// 示例 1:

// 输入: 二叉树: [1,2,3,4]
//        1
//      /   \
//     2     3  
//    /    
//   4     

// 输出: "1(2(4))(3)"
// 解释: 原本将是“1(2(4)())(3())”，
// 在你省略所有不必要的空括号对之后，
// 它将是“1(2(4))(3)”。
// 示例 2:

// 输入: 二叉树: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \  
//       4 

// 输出: "1(2()(4))(3)"
// 解释: 和第一个示例相似，
// 除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。

const Node = require('./node.js')

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.left = node2
node1.right = node3
node2.left = node4
// node2.right = node4

// 递归：
// 复杂度分析:
// 时间复杂度：O(N)，其中 NN 是二叉树中的节点数目。
// 空间复杂度：O(N)，在最坏情况下，会递归 N 层，需要 O(N) 的栈空间。
const tree2str = function(root) {
    if(root === null) {
        return ''
    }

    if(root.left === null && root.right === null) {
        return root.val + ''
    } else if (root.right == null) {
        return root.val + '(' + tree2str(root.left) + ')'
    } else {
        return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
    }
};
console.log( tree2str(node1) )

// 递归 前序遍历
function ergodicTree (root) {
    if (root === null) {
        return ''
    }

    if (root.left === null && root.right === null) {
        return root.val + ""
    }else if (root.right === null) {
        return root.val + "" + ergodicTree(root.left)
    } else {
        return root.val + "" + ergodicTree(root.left) + "" + ergodicTree(root.right)
    }
}
console.log( ergodicTree(node1) )