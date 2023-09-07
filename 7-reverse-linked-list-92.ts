class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let e = new ListNode(5);
let d = new ListNode(4, e);
let c = new ListNode(3, d);
let b = new ListNode(2, c);
let a = new ListNode(1, b);

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (head === null) return null;
    if (left === right) return head;

    let prevNode: ListNode | null = null;
    let nextNode: ListNode | null = null;
    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    let cur: ListNode | null = head;
    let count: number = 0;

    while (cur !== null) {
        count += 1;
        if (count === left - 1) prevNode = cur;
        while (cur !== null && left <= count && count <= right) {
            if (nextNode === null) nextNode = cur;
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            count += 1;
        }

        if (count >= right) {
            if (prevNode !== null) prevNode.next = prev;
            else {
                head = prev;
            }
            if (nextNode !== null) nextNode.next = cur;
            break;
        }
        cur = cur === null ? null : cur.next;
    }

    return head;
}

function print(h: ListNode | null): void {
    const arr: number[] = [];
    while (h !== null) {
        arr.push(h.val);
        h = h.next;
    }
    console.log(arr);
}
print(reverseBetween(a, 1, 3));
