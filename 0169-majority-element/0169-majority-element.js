const nums = [2, 2, 1, 1, 1, 2, 2 , 3,3];
const result = majorityElement(nums);

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}
console.log(result); 