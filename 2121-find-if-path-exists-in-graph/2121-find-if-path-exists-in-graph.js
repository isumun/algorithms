function validPath(n, edges, source, destination) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = Array(n).fill(false);

    const queue = [source];
    visited[source] = true;

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === destination) {
            return true;
        }

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return false;
}

const edges1 = [[0, 1], [1, 2], [2, 0]];
const n1 = 3;
const source1 = 0;
const destination1 = 2;
console.log(validPath(n1, edges1, source1, destination1)); // Output: true

const edges2 = [[0, 1], [1, 2], [2, 3], [3, 4]];
const n2 = 5;
const source2 = 0;
const destination2 = 4;
console.log(validPath(n2, edges2, source2, destination2)); // Output: true

const edges3 = [[0, 1], [1, 2], [2, 3]];
const n3 = 4;
const source3 = 0;
const destination3 = 3;
console.log(validPath(n3, edges3, source3, destination3)); // Output: true

const edges4 = [[0, 1], [1, 2], [3, 4]];
const n4 = 5;
const source4 = 0;
const destination4 = 4;
console.log(validPath(n4, edges4, source4, destination4)); // Output: false
