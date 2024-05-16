
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let countS = {};
    let countT = {};

    for (let char of s) {
        countS[char] = (countS[char] || 0) + 1;
    }

    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }

    for (let key in countS) {
        if (countS[key] !== countT[key]) {
            return false;
        }
    }

    return true;
}

let s = "hero";
let t = "silent";
console.log(isAnagram(s, t));