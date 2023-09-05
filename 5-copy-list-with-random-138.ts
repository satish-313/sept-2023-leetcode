class N {
    val: number;
    next: N | null;
    random: N | null;
    constructor(val?: number, next?: N, random?: N) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}
let e = new N(1);
let d = new N(10);
let c = new N(11);
let b = new N(13);
let a = new N(7);
a.next = b;
b.next = c;
b.random = a;
c.next = d;
c.random = e;
d.next = e;
d.random = c;

function copyRandomList(head: N | null): N | null {
    if (head === null) return null;

    let nhead = new N();
    const map = new Map<N, N>();
    let cur: N | null = head;
    let nCur: N | null = nhead;

    while (cur !== null) {
        let newNode = new N(cur.val);
        nCur.next = newNode;
        map.set(cur, newNode);
        cur = cur.next;
        nCur = nCur.next;
    }

    nCur = nhead.next;
    cur = head;

    while (cur !== null && nCur !== null) {
        let n: N | null;
        if (cur.random !== null) {
            n = map.get(cur.random)!;
            console.log("N ", n);
        }
        if (n! !== null) {
            nCur.random = n!;
        }
        console.log("kfd ", n!);
        cur = cur.next;
        nCur = nCur.next;
    }

    return nhead.next;
}

console.log(copyRandomList(a));
