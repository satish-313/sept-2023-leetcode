function findDuplicate(nums:number[]): number {
    let slow = 0;
    let fast = 0;

    while(true){
        console.log(slow,fast,nums[fast]);
        slow = nums[slow];
        fast = nums[nums[fast]]
        console.log("after ",slow,fast);

        if (slow === fast) break;
    }

    slow = 0;

    console.log("after first loop")
    while(true) {
        console.log(slow,fast,nums[fast])
        slow = nums[slow]
        fast = nums[fast]
        console.log(slow,fast);
        if (slow === fast) break
    }

    return 0;
}

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
