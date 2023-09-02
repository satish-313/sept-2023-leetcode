function minExtraCharMemo(s: string, dictionary: string[]): number {
    const n = s.length;
    const dist = new Set(dictionary);
    const memo = new Map();

    const dp = function (start: number): number {
        console.log("start ", start);
        if (n === start) return 0;
        if (memo.has(start)) {
            console.log("memo ", start);
            return memo.get(start);
        }

        let ans = dp(start + 1) + 1;
        console.log("start after dp ", start);
        for (let end = start; end < n; end++) {
            const curr = s.slice(start, end + 1);
            console.log("curr ", curr);
            if (dist.has(curr)) {
                console.log("inside set ", curr);
                ans = Math.min(ans, dp(end + 1));
            }
        }

        memo.set(start, ans);
        console.log(memo);
        return ans;
    };
    return dp(0);
}
var minExtraChar = function (s: string, dictionary: string[]) {
    const n = s.length;
    const dictionarySet = new Set(dictionary);
    const dp = Array(n + 1).fill(0);

    for (let start = n - 1; start >= 0; start--) {
        dp[start] = dp[start + 1] + 1;
        for (let end = start; end < n; end++) {
            const curr = s.substring(start, end + 1);
            console.log(curr);
            if (dictionarySet.has(curr)) {
                dp[start] = Math.min(dp[start], dp[end + 1]);
            }
        }
    }
    console.log(dp);
    return dp[0];
};
console.log(minExtraChar("leetscodef", ["leet", "code", "leetcode"]));
