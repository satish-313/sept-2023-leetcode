class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// let j = new ListNode(10);
// let i = new ListNode(9, j);
// let h = new ListNode(8, i);
// let g = new ListNode(7, h);
// let f = new ListNode(6, g);
// let e = new ListNode(5, f);
// let d = new ListNode(4, e);
let c = new ListNode(3);
let b = new ListNode(2, c);
let a = new ListNode(1, b);

function splitListToParts(
    head: ListNode | null,
    k: number
): Array<ListNode | null> {
    let len = 0;
    let cur = head;

    while (cur) {
        len += 1;
        cur = cur.next;
    }

    let remider = len % k;
    len = Math.floor(len / k);
    cur = head;

    let res = new Array<ListNode | null>(k).fill(null);

    for (let i = 0; i < k; i++) {
        let h: ListNode | null = cur;
        let p: ListNode | null = cur;
        let count = remider > 0 ? len + 1 : len;
        remider -= 1;

        for (let j = 0; j < count && cur != null; j++) {
            p = cur;
            cur = cur.next;
        }
        if (p) p.next = null;
        else break;
        
        res[i] = h === null ? null : h;
        if (!cur) break;
    }

    return res;
}

console.log(splitListToParts(a, 5));
