// 206. 反转链表
// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

var reverseList = function (head) {
  let prev = null
  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp
  }
  // Prev is the reversed linked list
  return prev
}