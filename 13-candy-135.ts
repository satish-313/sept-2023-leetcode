function candy(ratings: number[]): number {
    const can = new Array(ratings.length).fill(1);

    function update(i: number) {
        if (i === 0) {
            if (ratings[i] > ratings[i + 1])
                can[i] = Math.max(can[i], can[i + 1] + 1);
        } else if (i === ratings.length - 1) {
            if (ratings[i] > ratings[i - 1])
                can[i] = Math.max(can[i], can[i - 1] + 1);
        } else {
            if (ratings[i] > ratings[i - 1])
                can[i] = Math.max(can[i], can[i - 1] + 1);
            if (ratings[i] > ratings[i + 1])
                can[i] = Math.max(can[i], can[i + 1] + 1);
        }
    }

    for (let i = 0; i < ratings.length; i++) update(i);
    for (let i = ratings.length - 1; i >= 1; i--) update(i);
    return can.reduce((t, n) => t + n, 0);
}
function candybest(ratings: number[]): number {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
}
console.log(candy([1, 0, 2])); // 5
console.log(candy([1, 2, 2])); //  4
console.log(candy([1, 2, 87, 87, 87, 2, 1])); // 13
console.log(candy([1, 3, 2, 2, 1])); // 7
