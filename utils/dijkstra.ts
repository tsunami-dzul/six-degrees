import { IGraph } from '../model/IGraph';
import { IDistance } from '../model/IDistance';

export const dijkstra = (graph: IGraph, start: string) => {
  let distances: IDistance = {};
  let visited = new Set();
  let nodes = Object.keys(graph);

  for (let node of nodes) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  while (nodes.length) {
    nodes.sort((a: string, b: string) => distances[a] - distances[b]);

    let closestNode = nodes.shift() ?? 0;

    if (distances[closestNode] === Infinity) break;

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

const deleteNulls = (distances: any) => {
  const newDistances: any = {};

  for (let key in distances) {
    if (distances[key] !== Infinity) {
      newDistances[key] = distances[key];
    }
  }

  return newDistances;
};
