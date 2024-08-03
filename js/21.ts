//21.ts

// Definition for singly - linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let mergeList: ListNode;

  if (list1?.val < list2?.val) {
    mergeList = new ListNode(list1.val);
    mergeList.next = mergeTwoLists(list1.next, list2);
  } else {
    mergeList = new ListNode(list2.val);
    mergeList.next = mergeTwoLists(list1, list2.next);
  }
  return mergeList;
}

let first: ListNode = new ListNode(2);
first.next = new ListNode(4);
first.next.next = new ListNode(8);
first.next.next.next = new ListNode(9);

// Create another hard-coded linked list:
// 1 -> 3 -> 8 -> 10
let second: ListNode = new ListNode(1);
second.next = new ListNode(3);
second.next.next = new ListNode(8);
second.next.next.next = new ListNode(10);

console.log(mergeTwoLists(first, second));
