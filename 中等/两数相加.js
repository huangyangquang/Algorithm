// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例 1：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 示例 2：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 示例 3：
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

// 提示：
// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var node1_2 = new ListNode(2)
var node1_4 = new ListNode(4)
var node1_3 = new ListNode(3)

node1_2.next = node1_4
node1_4.next = node1_3

var node2_5 = new ListNode(5)
var node2_6 = new ListNode(6)
var node2_4 = new ListNode(4)

node2_5.next = node2_6
node2_6.next = node2_4



 var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 == null) return

    var curNode = new ListNode(0)
    var curr = curNode
    var carry = 0


    while (l1 !== null || l2 !== null) {
        
        var x = l1 === null ? 0 : l1.val
        var y = l2 === null ? 0 : l2.val

        var sum = carry + x + y
        var curVal = (sum) % 10
        carry = Math.floor( (sum) / 10 )

        curr.next = new ListNode(curVal)
        curr = curr.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry > 0) {
        curr.next = new ListNode(carry)
    }

    return curNode.next
};


var resVal = addTwoNumbers(node1_2, node2_5)
console.log('resVal: ', resVal);