function summaryRanges(nums) {
    const ranges = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                ranges.push(`${nums[start]}`);
            } else {
                ranges.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }

    return ranges;
}

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9])); 
console.log(summaryRanges([])); 
console.log(summaryRanges([-1]));
console.log(summaryRanges([0])); 