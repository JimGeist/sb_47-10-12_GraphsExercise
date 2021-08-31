# sb_47-10-12_GraphsExercise
 
## Technology Stack
- **Front-end**: n/a
- **Back-end**: NodeJS script

## Assignment Details

Implement a `Graph` class with the following 7 methods:

`addVertex(vertex)` - adds a single node, vertex, to the graph.

`addVertices([`*v1*, *v2*, *vn*`])` - adds each vertex in an array to the graph.

`addEdge(v1, v2)` - method adds an edge between 2 nodes to the graph and adds the adds the v2 to v1's adjacent set AND adds v1 to v2's adjacent set.

`removeEdge(v1, v2)`- method removes an edge between 2 nodes from the graph and removes v2 from v1's adjacent set AND removes v1 from v2's adjacent set.

`removeVertex(vertex)`- deletes a vertex from the adjacent set for all nodes and removes the vertex from the graph.

`depthFirstSearch(startNode)` - method returns an array with the value of each node that is somehow connected to the startNode by performing a depth first search on the graph starting from startNode. This is the one with the stack.

`breadthFirstSearch(startNode)` - method returns an array with the value of each node that is somehow connected to the startNode by performing a breadth first search on the graph starting from startNode. This is the one with the queue.


## Additional Details

**Enhancements**
- Minor splash of recursion in `addVertices()` method. 


**Difficulties**
- Just going through the motions right now. I understand what a graph is and how to traverse it. I was happy that the breadthFirst and depthFirst searches required minor fixes. I was not careful with the current and adjNode references. Also forgot that `.forEach()` is available on a set too.


