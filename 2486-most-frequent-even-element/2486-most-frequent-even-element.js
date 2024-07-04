function mostFrequentEven(nums) {
    const evenElements = nums.filter(num => num % 2 === 0);

    if (evenElements.length === 0) {
        return -1;
    }

    const freq = {};
    evenElements.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });

    let mostFrequent = null;
    let highestCount = 0;

    for (const num in freq) {
        const count = freq[num];
        if (count > highestCount || (count === highestCount && num < mostFrequent)) {
            mostFrequent = Number(num);
            highestCount = count;
        }
    }

    return mostFrequent;
}

const nums = [4, 1, 2, 2, 3, 4, 4, 6, 6, 6, 8];
console.log(mostFrequentEven(nums));  
