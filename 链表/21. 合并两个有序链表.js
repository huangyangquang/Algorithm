// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 递归:
// 时间复杂度： O(n + m)
// 空间复杂度： O(n + m)
var mergeTwoLists = function(l1, l2) {
	if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


// 迭代：







// 2020.11.11
function mergeList(l1, l2) {
	if(l1 === null) {
		return l2
	} else if(l2 === null) {
		return l1
	} else if(l1.val < l2.val) {
		l1.next = mergeList(l1.next, l2)
		return l1
	} else {
		l2.next = mergeList(l1, l2.next)
		return l2
	}
}