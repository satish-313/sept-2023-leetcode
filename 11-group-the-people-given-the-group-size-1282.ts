function groupThePeople(groupSizes: number[]): number[][] {
    let result: number[][] = [];
    let map = new Map<number, number[]>();

    for (let i = 0; i < groupSizes.length; i++) {
        let num = groupSizes[i];
        if (map.has(num)) {
            let arr = map.get(num)!;
            arr.push(i);
        } else map.set(num, [i]);
    }

    let m = map.entries();
    let keyValue = m.next().value;

    while (keyValue != undefined) {
        let [key, value] = keyValue;
        if (key >= value.length) {
            result.push(value);
        } else {
            for (let i = 0; i < value.length; i += key) {
                let chunk = value.slice(i, i + key);
                result.push(chunk);
            }
        }
        keyValue = m.next().value;
    }

    return result;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
