// 2. 两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var node2 = new ListNode(2);
var node4_1 = new ListNode(4);
var node3 = new ListNode(3);
var node5 = new ListNode(5);
var node6 = new ListNode(6);
var node4_2 = new ListNode(4);

node2.next = node4_1;
node4_1.next = node3;

node5.next = node6;
node6.next = node4_2;

function add(head1, head2) {
	if(head1 == null || head2 == null) return;
	var dummyHead = new ListNode(0);
    var curr = dummyHead;
    var carry = 0;

    while (head1 != null || head2 != null) { // head1, head2 中存在一个，即以最长链为准
        var x = (head1 != null) ? head1.val : 0; // 短链中，相对长链不存在的部分，默认为0
        var y = (head2 != null) ? head2.val : 0;
        var sum = carry + x + y;
        carry = Math.floor( sum / 10 ); // 商值
        curr.next = new ListNode(sum % 10); // 创建新节点，赋值为余数
        curr = curr.next; // 切换链表，就是切换到下个节点
        if (head1 != null) head1 = head1.next;
        if (head2 != null) head2 = head2.next;
    }
    if (carry > 0) { // 如果还有余数
        curr.next = new ListNode(carry); // 添加新节点
    }
    return dummyHead.next; // 因为链表的头部的val为0
}

var addNode = add(node2, node5);
console.log(addNode);


// 复杂度分析：

// 时间复杂度：O(max(m, n))，假设 m 和 n 分别表示 l1 和 l2 的长度，上面的算法最多重复 max(m, n)次。
// 空间复杂度：O(max(m, n))， 新列表的长度最多为 max(m,n) + 1。
