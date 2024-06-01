class RecentCounter {
    constructor() {
        this.pings = [];
    }

    ping(t) {
        this.pings.push(t);
        while (this.pings[0] < t - 3000) {
            this.pings.shift();
        }
        return this.pings.length;
    }
}

// Example usage
var obj = new RecentCounter();
console.log(obj.ping(1));    // returns 1
console.log(obj.ping(100));  // returns 2
console.log(obj.ping(3001)); // returns 3
console.log(obj.ping(3002)); // returns 3

