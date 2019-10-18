import BinarySearchTree from './BST';

it('Simple working tests', () => {

  //Initialise our BST data structure
  let BST = new BinarySearchTree();

  //Insert some nodes for testing
  BST.insertNumberNode(7);
  BST.insertNumberNode(14);
  BST.insertNumberNode(5);
  BST.insertNumberNode(13);
  BST.insertNumberNode(8);
  BST.insertNumberNode(18);
  BST.insertNumberNode(15);
  BST.insertNumberNode(6);
  BST.insertNumberNode(29);
  BST.insertNumberNode(42);
  BST.insertNumberNode(-10);
  BST.insertNumberNode(-15);

  /*
  BST Looks like the following
              7
            /   \
          5     14
        / \     /  \
      -10   6   13    18
      /        / \   /  \ 
    -15       8     15   29
                          \
                           42
  */

  // ** First Test **
  // Find the LCA of two nodes at the same depth in the BST
  let lca = BST.findLCA(BST.root, 13, 18);
  expect(lca.data).toBe(14);

  // ** Second Test **
  // Find the LCA of two nodes in different branches and at different depths in the BST
  let lca2 = BST.findLCA(BST.root, 8, 6);
  expect(lca2.data).toBe(7);

  // ** Third Test **
  // Find LCA of two nodes with a LCA at a similar depth
  let lca3 = BST.findLCA(BST.root, 42, 15);
  expect(lca3.data).toBe(18);

  // ** Fourth Test **
  // Find LCA of two nodes with the root node as the LCA
  // Both nodes are at different depths and in different branches, 
  // this will test the algorithms accuracy accross nodes which are quite unrelated
  let lca4 = BST.findLCA(BST.root, 42, 6);
  expect(lca4.data).toBe(7);

  // ** Fifth Test **
  // Find LCA of two nodes where one node is the parent of the other
  let lca5 = BST.findLCA(BST.root, 6, 5);
  expect(lca5.data).toBe(5);

  // ** Sixth Test **
  // Find LCA of two nodes where one has a negative value
  // This test fails as my algorithm can't work with negative values
  let lca6 = BST.findLCA(BST.root, -10, 13);
  expect(lca6.data).toBe(7);

  // ** Seventh Test **
  // Find LCA of two nodes where both have negative values
  // This test fails as my algorithm can't work with negative values
  let lca6 = BST.findLCA(BST.root, -10, -15);
  expect(lca6.data).toBe(-10);
});

it('Test for keys that don\'t exist', () => {
  let BST = new BinarySearchTree();

  BST.insertNumberNode(6);
  BST.insertNumberNode(28);
  BST.insertNumberNode(12);
  BST.insertNumberNode(33);
  BST.insertNumberNode(2);

  /*
  BST Looks like the following
              6
            /   \
          2     28
        / \     /  \
               12    33
  */

  // ** First Test **
  // Find the LCA of two nodes; both don't exist in the BST
  let lca = BST.findLCA(BST.root, 0, 3);
  expect(lca).toBe(null);

  // ** Second Test **
  // Find the LCA of two nodes; only one exists in the BST
  let lca2 = BST.findLCA(BST.root, 33, 3);
  expect(lca2).toBe(null);

  // ** Third Test **
  // Find the LCA of two nodes; both don't exist and they both have either large or negative values
  let lca3 = BST.findLCA(BST.root, -323, 2113);
  expect(lca3).toBe(null);

  // ** Fourth Test **
  // Find the LCA of two nodes; one exists and one is a minus value that doesn't exist
  let lca4 = BST.findLCA(BST.root, -23, 28);
  expect(lca4).toBe(null);

});


it('Test for identical values searched', () => {
  let BST = new BinarySearchTree();

  BST.insertNumberNode(7);
  BST.insertNumberNode(14);
  BST.insertNumberNode(5);
  BST.insertNumberNode(13);
  BST.insertNumberNode(8);
  BST.insertNumberNode(18);
  BST.insertNumberNode(15);
  BST.insertNumberNode(6);
  BST.insertNumberNode(29);


  /*
  BST Looks like the following
              7
            /   \
          5     14
        / \     /  \
           6   13    18
              / \   /  \ 
             8     15   29
  */

  let lca = BST.findLCA(BST.root, 13, 13);
  expect(lca).toBe(null);

});


it('Test for edge cases', () => {
  let BST = new BinarySearchTree();

  BST.insertNumberNode(7);
  BST.insertNumberNode(14);
  BST.insertNumberNode(5);
  BST.insertNumberNode(13);
  BST.insertNumberNode(8);
  BST.insertNumberNode(18);
  BST.insertNumberNode(15);
  BST.insertNumberNode(6);
  BST.insertNumberNode(29);
  BST.insertNumberNode(42);

  /*
  BST Looks like the following
              7
            /   \
          5     14
        / \     /  \
           6   13    18
              / \   /  \ 
             8     15   29
                          \
                           42
  */

  // ** Testing inputs exceeding max and min values **

  let exceedMaxVal = Number.MAX_VALUE * 2;
  let exceedMinVal = Number.MIN_VALUE / -100;

  //Test with input exceeding max val
  let lca = BST.findLCA(BST.root, exceedMaxVal, 29);
  expect(lca).toBe(null);

  //Test with input exceeding min val
  let lca2 = BST.findLCA(BST.root, 15, exceedMinVal);
  expect(lca2).toBe(null);

  // ** Testing inputs with a null root node **
  let lca3 = BST.findLCA(null, 13, 6);
  expect(lca3).toBe(null);

  //Test for identical values searched
  let lca4 = BST.findLCA(BST.root, 13, 13);
  expect(lca4).toBe(null);

  //Test isValidValue function for output if supplied with a null node
  let lca5 = BST.isValidValue(null, 3);
  expect(lca5).toEqual(false);

});