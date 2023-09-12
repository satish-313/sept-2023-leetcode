function minDeletions(s: string): number {
    let arr = new Array(26).fill(0);
    let minDelete = 0;

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++;
    }
    arr = arr.sort((a, b) => b - a).filter((a) => a != 0);
    console.log(arr)
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] >= arr[i - 1] && arr[i] != 0) {
            arr[i] -= 1;
            minDelete += 1;
        }
    }
    console.log(arr);
    return minDelete;
}

console.log(minDeletions("bbcebab")) // 2
// console.log(minDeletions("aabbcc")); //3
// console.log(minDeletions("ceabaacb")); // 2
// console.log(minDeletions("aab")) // 0
// console.log(minDeletions("aaabbbcc")) // 2
