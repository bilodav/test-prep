// Run with:  node mergeLists.test.js

// ---------- LeetCode's ListNode ----------
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// ---------- YOUR FUNCTION (replace the body) ----------
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function sortLists(list1, list2) {
  const dummy = new ListNode(-Infinity);
  let prev = dummy; // want a reference to dummy

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }

  if (!list1) {
    prev.next = list2;
  }

  if (!list2) {
    prev.next = list1;
  }

  return dummy.next;
}

// ---------- Helpers ----------
function arrayToList(arr) {
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const arr = [];
  const seen = new Set(); // guards against accidental cycles
  while (head) {
    if (seen.has(head)) {
      throw new Error("Cycle detected in returned list");
    }
    seen.add(head);
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// ---------- Test cases ----------
const tests = [
  {
    name: "LeetCode example 1",
    a: [1, 2, 4],
    b: [1, 3, 4],
    expected: [1, 1, 2, 3, 4, 4],
  },
  { name: "Both empty", a: [], b: [], expected: [] },
  { name: "First empty", a: [], b: [0], expected: [0] },
  { name: "Second empty", a: [5, 6], b: [], expected: [5, 6] },
  { name: "Single nodes", a: [1], b: [2], expected: [1, 2] },
  { name: "Single nodes, reversed", a: [2], b: [1], expected: [1, 2] },
  {
    name: "All of list1 smaller",
    a: [1, 2, 3],
    b: [4, 5, 6],
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "All of list2 smaller",
    a: [4, 5, 6],
    b: [1, 2, 3],
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Interleaved",
    a: [1, 3, 5, 7],
    b: [2, 4, 6, 8],
    expected: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  { name: "Duplicates", a: [2, 2, 2], b: [2, 2], expected: [2, 2, 2, 2, 2] },
  {
    name: "Negatives",
    a: [-10, -3, 0],
    b: [-5, -1, 4],
    expected: [-10, -5, -3, -1, 0, 4],
  },
  {
    name: "Different lengths",
    a: [1],
    b: [2, 3, 4, 5, 6],
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Bounds (-100 to 100)",
    a: [-100, 100],
    b: [-100, 0, 100],
    expected: [-100, -100, 0, 100, 100],
  },
];

// ---------- Runner ----------
let passed = 0;

for (const t of tests) {
  try {
    const result = sortLists(arrayToList(t.a), arrayToList(t.b));
    const actual = listToArray(result);
    const ok = JSON.stringify(actual) === JSON.stringify(t.expected);

    if (ok) {
      passed++;
      console.log(`✅ ${t.name}`);
    } else {
      console.log(`❌ ${t.name}`);
      console.log(
        `   input:    ${JSON.stringify(t.a)} + ${JSON.stringify(t.b)}`,
      );
      console.log(`   expected: ${JSON.stringify(t.expected)}`);
      console.log(`   got:      ${JSON.stringify(actual)}`);
    }
  } catch (err) {
    console.log(`💥 ${t.name} threw: ${err.message}`);
  }
}

console.log(`\n${passed}/${tests.length} tests passed`);
