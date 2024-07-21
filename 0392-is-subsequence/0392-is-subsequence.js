function isSubsequence(s, t) {
    let pointerS = 0, pointerT = 0;


    while (pointerS < s.length && pointerT < t.length) {
        
        if (s[pointerS] === t[pointerT]) {
            pointerS++;
        }
        pointerT++;
    }

    return pointerS === s.length;
}

console.log(isSubsequence("ace", "abcde")); 
console.log(isSubsequence("aec", "abcde"));  
console.log(isSubsequence("", "abcde"));     
console.log(isSubsequence("abc", ""));      
