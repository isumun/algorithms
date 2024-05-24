function findPermutationDifference(s, t) {
    let dif = 0;
    
    const indexMapS = {};
    const indexMapT = {};
    
    for (let i = 0; i < s.length; i++) {
        indexMapS[s[i]] = i;
        indexMapT[t[i]] = i;
    }
    
    for (let c of s) {
        const indexS = indexMapS[c];
        const indexT = indexMapT[c];
        dif += Math.abs(indexS - indexT);
    }
    
    return dif;
}

const s = "abc";
const t = "bac";
console.log(findPermutationDifference(s, t));   


