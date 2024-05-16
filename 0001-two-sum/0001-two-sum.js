const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    const numbersMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        const numbers = target - nums[i];
        
        if (numbers in numbersMap) {
            return [numbersMap[numbers], i]
        }
        numbersMap[nums[i]] = i
    }
}

console.log(twoSum(nums, target));