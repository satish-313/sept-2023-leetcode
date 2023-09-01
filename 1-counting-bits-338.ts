function countBits(n:number):number[] {
    let map = new Map<number,number>();
    let ans = new Array<number>(n+1).fill(0);

    ans[0] = 0;

    function binaryCount(num:number):number {
        let count = 0;

        while(num) {
            if (map.has(num)) return map.get(num)! + count;
            count += num % 2;
            num = Math.floor(num/2);
        }

        return count;
    }

    for (let i=1; i<=n; i++) {
        let count = binaryCount(i);
        map.set(i,count);
        ans[i] = count;
    }

    return ans;
}
