import DirectedAcyclicGraph from './DAG';

it('Some initial tests to ensure it works!', () => {
        let DAG = new DirectedAcyclicGraph(6);
       
        // Using the above implemented graph class 
        var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

        // adding vertices 
        for (var i = 0; i < vertices.length; i++) { 
                DAG.addVertex(vertices[i]); 
        } 

        // adding edges 
        DAG.addEdge('A', 'B'); 
        DAG.addEdge('A', 'D'); 
        DAG.addEdge('A', 'E'); 
        DAG.addEdge('B', 'C'); 
        DAG.addEdge('D', 'E'); 
        DAG.addEdge('E', 'F'); 
        DAG.addEdge('E', 'C'); 
        DAG.addEdge('C', 'F'); 

        // prints all vertex and 
        // its adjacency list 
       
        DAG.printGraph(); 

        //We should see the following
        //               A
        //           /   |  \
        //          |    |    B
        //          ↓    ↓   ↓
        //          D -> E -> C
        //               |    /
        //               ↓   |
        //               F <-
        
        let lca = DAG.findLCA('E','B');
        expect(lca).toBe('A');
});
