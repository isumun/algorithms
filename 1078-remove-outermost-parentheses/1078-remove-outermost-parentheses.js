function removeOuterParentheses(s) {
    let result = "";
    let balance = 0;
    let primitiveStart = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (balance === 0) {
                primitiveStart = i;
            }
            balance++;
        } else if (s[i] === ")") {
            balance--;
            if (balance === 0) {
                result += s.slice(primitiveStart + 1, i);
            }
        }
    }

    return result;
}

let s = "(()())(())(()(()))";
console.log(removeOuterParentheses(s));
