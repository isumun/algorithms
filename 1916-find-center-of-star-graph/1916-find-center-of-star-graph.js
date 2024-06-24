function findCenter(edges) {
    const [u1, v1] = edges[0];
    const [u2, v2] = edges[1];
    
    if (u1 === u2 || u1 === v2) {
        return u1;
    } else {
        return v1;
    }
}

const edges1 = [[1, 2], [2, 3], [4, 2]];
console.log(findCenter(edges1)); 

const edges2 = [[1, 3], [2, 3], [3, 4]];
console.log(findCenter(edges2)); 