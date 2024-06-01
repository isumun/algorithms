function RecentCounter() {
    this.requests = [];
  
    this.ping = function(t) {
        this.requests.push(t);
        this.requests = this.requests.filter(function(time) {
            return time >= t - 3000;
        });
        return this.requests.length;
    };
}

var obj = new RecentCounter();
console.log(obj.ping(1));    
console.log(obj.ping(100));  
console.log(obj.ping(3001)); 
console.log(obj.ping(3002)); 