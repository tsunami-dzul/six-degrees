function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

const graph = {
  0: ['1', '3'],
  1: ['0'],
  2: ['3', '8'],
  3: ['0', '4', '5', '2'],
  4: ['3', '6'],
  5: ['3'],
  6: ['4', '7'],
  7: ['6'],
  8: ['2'],
};

const result = bfs(graph, '0');

console.log(result);
