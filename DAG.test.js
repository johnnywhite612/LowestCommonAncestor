import DirectedAcyclicGraph from './DAG';

it('Some initial tests to ensure it works!', () => {
        let DAG = new DirectedAcyclicGraph();
        /*
          I want my DAG to resemble to following
                      7
                    /   \
                  5     14
                / \     /  \
                   6   13    18
                      / \   /  \ 
                     8     15   29
          */

        DAG.addVertex(5);
        DAG.addVertex(6);
        DAG.addVertex(4);
        DAG.addVertex(1);
     
        DAG.addEdge(5,1);
        DAG.addEdge(5,6);
        DAG.addEdge(4,1);
        DAG.addEdge(1,6);
        DAG.addEdge(4,6);

        let lca = BST.findLCA(BST.root, 13, 18);
        expect(lca.data).toBe(14);
});
