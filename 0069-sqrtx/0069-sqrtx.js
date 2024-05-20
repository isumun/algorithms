function mySqrt(x) {
    if (x === 0) {
        return 0;
    }
    let left = 1;
    let rigth = x;
    let result;

    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2);
        let midSqrt = mid * mid;
        if (midSqrt === x) {
            return mid;
        } else if (midSqrt < x) {
            left = mid + 1;
            result = mid;
        } else if (midSqrt > x) {
            rigth = mid - 1;
        }
    }
    return result;
}
console.log(mySqrt(17));
