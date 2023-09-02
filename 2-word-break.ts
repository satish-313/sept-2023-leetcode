function wordBreakmy(s: string, wordDict: string[]): boolean {
    let n = s.length;
    const set = new Set(wordDict);
    const dp = new Array(n + 1).fill(false);
    let maxLen = Math.max(...wordDict.map((w) => w.length));
    dp[n] = true;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < Math.min(n, i + maxLen); j++) {
            let str = s.slice(i, j + 1);
            // console.log("str ", str);
            if (set.has(str)) {
                // console.log("inside ", i, j, dp[j+1]);
                dp[i] = true;
            }
        }
    }
    console.log(dp);
    return dp[0];
}

function wordBreak(s: string, wordDict: string[]): boolean {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    let max_len = Math.max(...wordDict.map((w) => w.length));

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp);
    return dp[n];
}

console.log(wordBreakmy("leetcode", ["leet", "code"]));
console.log(wordBreakmy("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreakmy("a", ["b"]));
console.log(wordBreakmy("aaaaaaa", ["aaaa", "aa"]));
