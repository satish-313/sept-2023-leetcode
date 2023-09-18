function minCostConPoints(points: number[][]): number {
    let len = points.length;
    let map = new Map<number, [number, number][]>();
    let visit = new Array(len).fill(null).map(() => new Array(len).fill(false));
    let minCost = 0;

    function findAdj(n: number) {
        let [r, c] = points[n];

        let temp: [number, number][] = [];
        for (let i = 0; i < len; i++) {
            if (i === n) continue;
            let [a, b] = points[i];
            let d = Math.abs(r - a) + Math.abs(c - b);
            temp.push([i, d]);
        }
        temp.sort((a, b) => a[1] - b[1]);
        map.set(n, temp);
    }
    points.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < len; i++) {
        findAdj(i);
    }
    let m = new Map<number, number[]>();
    for (let key of map) {
        // console.log(key);
        let k = key[0];
        let adj = key[1][0][0];
        if (m.has(adj)) {
            let a = m.get(adj)!;
            a.push(k);
        } else m.set(adj, [k]);
    }
    let c = 0;
    let v = new Array(len).fill(false);

    function dfs(i: number) {
        if (v[i] === true) return;
        let mp = m.get(i);
        if (mp === undefined) return;
        v[i] = true;
        for (let num of mp) {
            if (!v[num]) dfs(num);
        }
    }

    for (let key of m) {
        if (v[key[0]]) continue;
        c += 1;
        dfs(key[0]);
    }
    console.log(c, v);
    return minCost;
}

console.log(
    minCostConPoints([
        [2, -3],
        [-17, -8],
        [13, 8],
        [-17, -15],
    ])
);

console.log(
    minCostConPoints([
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0],
    ])
); // 20
console.log(
    minCostConPoints([
        [3, 12],
        [-2, 5],
        [-4, 1],
    ])
); // 18
