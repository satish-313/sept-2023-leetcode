function KWeakestRows(mat:number[][],k:number):number[] {
    const weak:[number,number][] = [];

    for (let i=0; i<mat.length; i++) {
        let count = 0;
        mat[i].forEach((i) => i===1 ? count+= 1 : count);
        weak.push([i,count]);
    }

    weak.sort((a,b) => a[1]-b[1]);

    const ans:number[] = [];

    for (let i=0; i<k;i++) ans.push(weak[i][0])

    return ans;
}
