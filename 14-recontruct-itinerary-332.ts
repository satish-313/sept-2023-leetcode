function findItinerarybest(tickets: string[][]): string[] {
    const adj = {};

    tickets.sort((a,b) => a[1] > b[1] ? -1 : 1);

    for (const ticket of tickets) {
        const [from, to] = ticket;

        if (adj[from]) {
            adj[from].push(to);
        } else {
            adj[from] = [to];
        }
    }
    const it: string[] = [];
    function dfs(curr: string) {
        const to = adj[curr] || [];

        while (to.length > 0) {
            const next = to.pop();
            dfs(next);
        }
        
        it.unshift(curr);
    }

    dfs('JFK');

    return it;
};

function findItinerary(tickets: string[][]): string[] {
    let map = new Map<string, string[]>();
    let cMap = new Map<string, Map<string, number>>();
    console.log(tickets)
    tickets.sort((a, b) => (a[1] > b[1] ? 1 : -1));
    console.log(tickets)
    for (let [from, to] of tickets) {
        if (map.has(from)) {
            let a = map.get(from)!;
            a.push(to);
        } else map.set(from, [to]);

        if (cMap.has(from)) {
            let m = cMap.get(from)!;
            if (m.has(to)) {
                let t = m.get(to)!;
                m.set(to, t + 1);
            } else {
                m.set(to, 1);
            }
        } else {
            let m = new Map<string, number>();
            m.set(to, 1);
            cMap.set(from, m);
        }
    }

    let len = tickets.length;

    function dfs(str: string, n: number): string[] | undefined {
        // console.log("dfs start", str, n);
        let m = map.get(str);
        if (n === 1) return [str];
        if (m === undefined) return undefined;

        let ans: string[] = [];
        let set = cMap.get(str)!;
        for (let s of m) {
            let t = set.get(s)!;
            if (t <= 0) continue;
            t -= 1;
            set.set(s, t);
            ans = dfs(s, n - 1)!;
            t += 1;
            set.set(s, t);
            if (ans === undefined) continue;
            // console.log("return dfs ", str, ans);
            return [str, ...ans];
        }
        // console.log("kdklf");
    }

    let arr = map.get("JFK")!;
    let s = cMap.get("JFK")!;
    console.log(map);
    // for (let str of arr) {
    //     let t = s.get(str)!;
    //     if (t <= 0) continue;
    //     t -= 1;
    //     s.set(str, t);
    //     let ans = dfs(str, len);
    //     t += 1;
    //     s.set(str, t);
    //     if (ans !== undefined) {
    //         ans = ["JFK", ...ans];
    //         if (ans.length === len + 1) return ans;
    //     }
    // }
    return [];
}
["JFK", "ANU", "EZE", "AXA", "TIA", "ANU", "JFK", "TIA", "ANU", "TIA", "JFK"];
console.log(
    findItinerary([
        ["EZE", "AXA"],
        ["TIA", "ANU"],
        ["ANU", "JFK"],
        ["JFK", "ANU"],
        ["ANU", "EZE"],
        ["TIA", "ANU"],
        ["AXA", "TIA"],
        ["TIA", "JFK"],
        ["ANU", "TIA"],
        ["JFK", "TIA"],
    ])
);
// console.log(
//     findItinerary([
//         ["JFK", "KUL"],
//         ["JFK", "NRT"],
//         ["NRT", "JFK"],
//     ])
// );
// console.log(
//     findItinerary([
//         ["JFK", "AAA"],
//         ["AAA", "JFK"],
//         ["JFK", "BBB"],
//         ["JFK", "CCC"],
//         ["CCC", "JFK"],
//     ])
// );
// console.log(
//     findItinerary([
//         ["JFK", "KUL"],
//         ["JFK", "NRT"],
//         ["NRT", "JFK"],
//     ])
// );
// console.log(
//     findItinerary([
//         ["MUC", "LHR"],
//         ["JFK", "MUC"],
//         ["SFO", "SJC"],
//         ["LHR", "SFO"],
//     ])
// );

// console.log(
//     findItinerary([
//         ["JFK", "SFO"],
//         ["JFK", "ATL"],
//         ["SFO", "ATL"],
//         ["ATL", "JFK"],
//         ["ATL", "SFO"],
//     ])
// );
