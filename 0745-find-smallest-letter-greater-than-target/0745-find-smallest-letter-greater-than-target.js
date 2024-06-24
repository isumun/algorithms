function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    

    if (target >= letters[right] || target < letters[left]) {
        return letters[0];
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return letters[left];
}

const letters = ['c', 'f', 'j'];
const target = 'a';
console.log(nextGreatestLetter(letters, target)); 

const target2 = 'c';
console.log(nextGreatestLetter(letters, target2)); 

const target3 = 'k';
console.log(nextGreatestLetter(letters, target3)); 
