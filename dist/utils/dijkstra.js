"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstra = void 0;
const dijkstra = (graph, start) => {
    let distances = {};
    let visited = new Set();
    let nodes = Object.keys(graph);
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift() ?? 0;
        if (distances[closestNode] === Infinity)
            break;
        visited.add(closestNode);
        for (let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                if (newDistance < distances[neighbor] && newDistance <= 3) {
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
    const result = deleteNulls(distances);
    return result;
};
exports.dijkstra = dijkstra;
const deleteNulls = (distances) => {
    const newDistances = {};
    for (let key in distances) {
        if (distances[key] !== Infinity) {
            newDistances[key] = distances[key];
        }
    }
    return newDistances;
};
