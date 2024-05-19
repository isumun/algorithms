function romanToInt(s) {
    const romanSymbol = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,  
        "M" : 1000

    }
    
    let total = 0
    let romanLatter = 0

    for (let i = 0; i < s.length; i++) {
        let currValue = romanSymbol[s[i]];
     
            if (romanLatter < currValue) {
                total += currValue - 2 * romanLatter 
            } else {
                total += currValue
            }
          
            
            
        romanLatter = currValue
    }
    return total
};
console.log(romanToInt("IV"));     
console.log(romanToInt("IX"));     
console.log(romanToInt("LVIII")); 
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));  