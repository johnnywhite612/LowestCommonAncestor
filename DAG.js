export default class DAG {

        // Here we setup our datastructure
        constructor(noOfVertices) {
                this.noOfVertices = noOfVertices;       //set the number of nodes
                this.adjList = new Map();       //Create a Map DS to store data
        }

        //Checks number of nodes/verts in DS
        getVertCount(){
                return this.adjList.size;
        }
        

        // Used primarily for testing - finds the adjacent nodes that the node v points to
        getAdjVertex(v){
                return this.adjList.get(v);
        }

        // Adds a vertex/node to the graph 
        addVert(v) {
                // initializes the adjacent list
                this.adjList.set(v, []);
        }

        // Adds an edge to the graph 
        addEdge(i, j) {
                // Gets the list for vertex i and puts the vertex j - signifying an edge between i and j
                this.adjList.get(i).push(j);
        }

        printGraph() {
                // Gets all the vertices 
                var get_keys = this.adjList.keys();

                // Iterates over the vertices 
                for (var i of get_keys) {
                        var get_values = this.adjList.get(i);
                        var conc = "";

                        // Iterates over the adjacency list & stores all the values into a string 
                        for (var j of get_values)
                                conc += j + " ";

                        // Print the vertex and its adjacency list to the system console
                        console.log(i + " -> " + conc);
                }
        }


        // The main DFS method 
        dfs(startingNode, m1, m2) {
                var visited = [];
                for (var i = 0; i < this.noOfVertices; i++)
                        visited[i] = false;

                this.DFSMethod(startingNode, visited, startingNode, m1, m2);
        }

        // Recursive method which processes all the adj vertex of the vert with which it was called
        DFSMethod(vert, visited, og, m1, m2) {
                // The vert is the parent
                visited[vert] = true;
                console.log(vert);

                var get_neighbour_elems = this.adjList.get(vert);

                for (var i in get_neighbour_elems) {
                        var get_elem = get_neighbour_elems[i];
                        if(get_elem === m1){
                                console.log("MATCH: "+get_elem+" = "+m1);
                        }
                        if(get_elem === m2){
                                console.log("MATCH: "+get_elem+" = "+m2);
                        }
                        if (!visited[get_elem])
                                this.DFSMethod(get_elem, visited, og, m1, m2);
                }
        }

        findLCA(val1, val2) {
                this.val1 = val1;
                this.val2 = val2;
                let lcaResult = 0;
                let minDist = 0;
                // Cycles through each node and checks, if is parent of both, which has shortest distance
                // Result is the LCA of the Directed Acyclic Graph
                for (var i = 0; i < this.noOfVertices; i++){
                        if(lcaResult < minDist){
                                lcaResult = this.dfs(this.adjList.get(i), val1, val2);
                        }                        
                }
                return lcaResult;
        }

}
