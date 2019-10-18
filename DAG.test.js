import DirectedAcyclicGraph from './DAG';

it('Initial Directed Acyclic Graph data structure setup tests', () => {
        //Here we define our DS and set the number of nodes to 6
        let DAG = new DirectedAcyclicGraph(6);

         // Here we define the available verts
         var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

         // Adding the vertices 
         for (var i = 0; i < vertices.length; i++) { 
                 DAG.addVert(vertices[i]); 
         } 

        // ** FIRST TEST ** 
        //Our first test checks that the DS has been initialised with the correct number of nodes
        expect(DAG.getVertCount()).toBe(6);
       
       

        // adding edges 
        DAG.addEdge('A', 'B'); 

        // ** SECOND TEST ** 
        // This checks that B has been successfully added as an adjacent vertext to A
        let result = DAG.getAdjVertex('A');
        expect(result).toBe('B');

        DAG.addEdge('A', 'D'); 
        DAG.addEdge('A', 'E'); 
        DAG.addEdge('B', 'C'); 
        DAG.addEdge('D', 'E'); 
        DAG.addEdge('E', 'F'); 
        DAG.addEdge('E', 'C'); 
        DAG.addEdge('C', 'F'); 

        // ** THIRD TEST ** 
        // This checks that F has been successfully added as an adjacent vertext to C
        let result = DAG.getAdjVertex('C');
        expect(result).toBe('F');

        // ** FOURTH TEST ** 
        // This checks that F has been successfully added as an adjacent vertext to E
        let result = DAG.getAdjVertex('E');
        expect(result).toBe('F');

        //Here we'll print the graph to monitor how the DS looks
        DAG.printGraph(); 

        //We should see something that relates to the following
        //               A
        //           /   |  \
        //          |    |    B
        //          ↓    ↓   ↓
        //          D -> E -> C
        //               |    /
        //               ↓   |
        //               F <-
           
});

it('Lowest Common Ancestor test for DAG', () => {
        let DAG = new DirectedAcyclicGraph(9);
        var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]; 
        for (var i = 0; i < vertices.length; i++) { 
                DAG.addVert(vertices[i]); 
        } 

        DAG.addEdge('A', 'B'); 
        DAG.addEdge('A', 'D'); 
        DAG.addEdge('A', 'E'); 
        DAG.addEdge('B', 'C'); 
        DAG.addEdge('D', 'E'); 
        DAG.addEdge('E', 'F'); 
        DAG.addEdge('E', 'C'); 
        DAG.addEdge('C', 'F'); 
        DAG.addEdge('F', 'G'); 
        DAG.addEdge('F', 'H'); 
        DAG.addEdge('B', 'I'); 


        //Here we'll print the graph to monitor how the DS looks
        DAG.printGraph(); 

        //We should see something that relates to the following
        //               A
        //           /   |  \
        //          |    |    B
        //          ↓    ↓   ↓   \
        //          D -> E -> C   ↓ 
        //               |    /   I
        //               ↓   |
        //               F <-
        //              /  \
        //             ↓    ↓
        //             G    H


        // ** FIST TEST ** 
        // This checks the lowest common ancestor of B and E
        // A simple test to start off with
        let lca = DAG.findLCA('E','B');
        expect(lca).toBe('A');

        // ** SECOND TEST ** 
        // This checks the lowest common ancestor of H and C
        // This tests the algorithms capability in lower down branches; C being directly beside E and H being 2 level below
        let lca2 = DAG.findLCA('H','C');
        expect(lca2).toBe('E');

        // ** THIRD TEST ** 
        // This checks the lowest common ancestor of G and D
        // This tests similarly to the second test above, but with two different vertices
        let lca3 = DAG.findLCA('G','D');
        expect(lca3).toBe('A');

        // ** FOURTH TEST ** 
        // This checks the lowest common ancestor of I and G
        // I is on a remote branch of the graph with no children and only one parent, G is further down
        let lca4 = DAG.findLCA('I','G');
        expect(lca4).toBe('A');

        // ** FIFTH TEST ** 
        // This checks the lowest common ancestor of A and D
        // A is the root node - so this test makes sure the algorithm can deal with a node being the parent of itself 
        // and another node further downt the graph
        let lca5 = DAG.findLCA('A','D');
        expect(lca5).toBe('A');

});

it('Edge case tests', () => {
        
        let DAG = new DirectedAcyclicGraph(6);
        var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
        for (var i = 0; i < vertices.length; i++) { 
                DAG.addVert(vertices[i]); 
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

        //We should see something that relates to the following
        //               A
        //           /   |  \
        //          |    |    B
        //          ↓    ↓   ↓
        //          D -> E -> C
        //               |    /
        //               ↓   |
        //               F <-
   
        // ** FIST TEST ** 
        // This checks the graph for the LCA of two values, one doesn't exist in the graph
        // It should return null
        let lca = DAG.findLCA('A','P');
        expect(lca).toBe(null);

        // ** SECOND TEST ** 
        // This checks the graph for the LCA of two values that don't exist
        // It should return null
        let lca2 = DAG.findLCA('R','Y');
        expect(lca2).toBe(null);

        // ** THIRD TEST ** 
        // This checks the lowest common ancestor of repeated values
        // The result should be the value itself
        let lca3 = DAG.findLCA('D','D');
        expect(lca3).toBe('D');

});