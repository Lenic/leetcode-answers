import Heap from './heap';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const head = new ListNode(0);
  let node = head;

  const { down, setSize } = new Heap(lists, lists.length, (x, y) => {
    if (x === null) {
      return -1;
    } else if (y === null) {
      return 1;
    }

    return x.val - y.val;
  });

  while (lists.length) {
    const item = lists[0];
    if (!item) {
      if (lists.length > 1) {
        lists[0] = lists.pop();
        setSize(lists.length);
        down(0);
        continue;
      }
      break;
    }

    node.next = new ListNode(lists[0].val);
    node = node.next;

    if (lists[0].next) {
      lists[0] = lists[0].next;
    } else if (lists.length > 1) {
      lists[0] = lists.pop();
      setSize(lists.length);
    } else {
      break;
    }

    down(0);
  }

  return head.next;
};

/**
 * @param {number} val
 * @param {ListNode|null} next
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const polyfill = (nums) => {
  const lists = nums.map((v) => v.reduceRight((next, x) => new ListNode(x, next), null));
  let node = mergeKLists(lists);

  let res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  console.log(res);
};

// []
polyfill([[]]);

// [1,1,2,3,4,4,5,6]
polyfill([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);
