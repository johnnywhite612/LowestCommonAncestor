export default class DAG {

        constructor(noOfVertices) {
                this.noOfVertices = noOfVertices;
                this.AdjList = new Map();
        }

        // add vertex to the graph 
        addVertex(v) {
                // initialize the adjacent list
                this.AdjList.set(v, []);
        }

        // add edge to the graph 
        addEdge(v, w) {
                // get the list for vertex v and put the 
                // vertex w denoting edge between v and w 
                this.AdjList.get(v).push(w);
        }

        printGraph() {
                // get all the vertices 
                var get_keys = this.AdjList.keys();

                // iterate over the vertices 
                for (var i of get_keys) {
                        // great the corresponding adjacency list 
                        // for the vertex 
                        var get_values = this.AdjList.get(i);
                        var conc = "";

                        // iterate over the adjacency list 
                        // concatenate the values into a string 
                        for (var j of get_values)
                                conc += j + " ";

                        // print the vertex and its adjacency list 
                        console.log(i + " -> " + conc);
                }
        }


        // The main DFS method 
        dfs(startingNode, m1, m2) {
                var visited = [];
                for (var i = 0; i < this.noOfVertices; i++)
                        visited[i] = false;

                this.DFSUtil(startingNode, visited, startingNode, m1, m2);
        }

        // Recursive method which processes all the adj vertex
        // of the vert with which it was called
        DFSUtil(vert, visited, og, m1, m2) {
                //vert is the parent
                visited[vert] = true;
                console.log(vert);

                var get_neighbours = this.AdjList.get(vert);

                for (var i in get_neighbours) {
                        var get_elem = get_neighbours[i];
                        if(get_elem === m1){
                                console.log("MATCH: "+get_elem+" = "+m1);
                        }
                        if(get_elem === m2){
                                console.log("MATCH: "+get_elem+" = "+m2);
                        }
                        if (!visited[get_elem])
                                this.DFSUtil(get_elem, visited, og, m1, m2);
                }
        }

        findLCA(val1, val2) {
                this.val1 = val1;
                this.val2 = val2;
                for (var i = 0; i < this.noOfVertices; i++){
                        this.dfs(this.AdjList.get(i), val1, val2);
                }
                return 0;
        }

}
