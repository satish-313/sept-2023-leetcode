function generate(numRows: number): number[][] {
    const res: number[][] = [];
    res.push([1]);

    for (let j = 2; j <= numRows; j++) {
        res.push([]);
        let end = res.length - 2;
        console.log(res[end]);
        console.log(j);
        for (let i = 0; i < j; i++) {
            let topl = res[end][i - 1] === undefined ? 0 : res[end][i - 1];
            let topr = res[end][i] === undefined ? 0 : res[end][i];
            let sum = topl + topr;
            res[end + 1].push(sum);
        }
    }
    return res;
}
console.log(generate(5));
