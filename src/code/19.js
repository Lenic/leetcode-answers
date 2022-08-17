/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;

  let previous = null;
  let left = head;
  let right = head;

  for (let i = 1; i < n; i++) {
    if (right.next) {
      right = right.next;
    } else {
      return head;
    }
  }

  while (right.next) {
    previous = left;
    left = left.next;
    right = right.next;
  }

  if (!previous) return head.next;

  previous.next = left.next;
  return head;
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {ListNode}
 */
const polyfill = (nums, n) => {
  const head = nums.length ? new ListNode(nums[0]) : null;

  if (nums) {
    let current = head;
    for (let i = 1; i < nums.length; i++) {
      const item = new ListNode(nums[i]);

      current.next = item;
      current = item;
    }
  }

  let removedList = removeNthFromEnd(head, n);
  const res = [];
  while (removedList) {
    res.push(removedList.val);
    removedList = removedList.next;
  }
  return res;
};

// [1,2,3,5]
console.log(polyfill([1, 2, 3, 4, 5], 2));

// []
console.log(polyfill([1], 1));

// [1]
console.log(polyfill([1, 2], 1));

// [2]
console.log(polyfill([1, 2], 2));
