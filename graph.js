class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;  // adjacent is a set.
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }


  // Method accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }


  // Method accepts an array of Node instances and adds them to the nodes property on the graph.
  // addVertices uses recursion to process the array.
  addVertices(vertexArray, idx = 0) {
    if (idx < vertexArray.length) {
      this.addVertex(vertexArray[idx]);
      this.addVertices(vertexArray, idx + 1);
    }

  }


  // Method accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    // adjacent is a set. .add() and .delete() methods are used to adjust the set.
    // reciprocating edges are added -- v1 to v2 AND v2 to v1
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }


  // Method accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    // adjacent is a set. .delete() method is used to delete (remove) from the set.
    // reciprocating edges are also deleted -- v1 to v2 AND v2 to v1
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }


  // Method accepts a vertex and removes it from the nodes property, it also updates any 
  //  adjacency lists that include that vertex
  removeVertex(vertex) {
    // for each nodeVertex in this.nodes:
    // remove vertex from the adjacent set for node nodeVertex.
    // remove the vertex from the graph nodes list.

    this.nodes.forEach(nodeVertex => {
      // Remove vertex from the adjacent set for node nodeVertex.
      if (nodeVertex.adjacent.has(vertex)) nodeVertex.adjacent.delete(vertex);
    })

    // remove the vertex from the graph nodes list.
    this.nodes.delete(vertex);

  }


  // Method returns an array of Node values using DFS
  depthFirstSearch(startNode) {

    const nodesToVisitStack = [startNode];
    const visited = new Set(startNode.value);
    const dfsNodes = [];

    let current;
    const runaway = this.nodes.size * 2;
    let runawayCtr = 0;
    while ((nodesToVisitStack.length) && (runawayCtr < runaway)) {

      current = nodesToVisitStack.pop();
      dfsNodes.push(current.value);

      // for each of current's adjacent nodes, if the adjacent node 
      //  is not in the visited set, push the node onto the ToVisitStack 
      //  and add the adjacent node's value to the visited set.

      current.adjacent.forEach((adjNode) => {

        if (visited.has(adjNode.value) === false) {
          nodesToVisitStack.push(adjNode);
          visited.add(adjNode.value);
        }

      });

      runawayCtr++;
    }

    return dfsNodes;

  }


  // Method returns an array of Node values using BFS
  breadthFirstSearch(startNode) {

    const nodesToVisitQueue = [startNode];
    const visited = new Set(startNode.value);
    const bfsNodes = [];

    let current;
    while (nodesToVisitQueue.length) {

      current = nodesToVisitQueue.shift();
      bfsNodes.push(current.value);

      // for each of current's adjacent nodes, if the adjacent node 
      //  is not in the visited set, push the node onto the ToVisitQueue
      //  and add the adjacent node's value to the visited set.

      current.adjacent.forEach((adjNode) => {

        if (visited.has(adjNode.value) === false) {
          nodesToVisitQueue.push(adjNode);
          visited.add(adjNode.value);
        }

      });

    }

    return bfsNodes;
  }
}

module.exports = { Graph, Node }