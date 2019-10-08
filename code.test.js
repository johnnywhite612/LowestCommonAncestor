import BinarySearchTree from './BinarySearchTree';

it('Simple working tests', () => {
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
  
  let lca = BST.findLCA(BST.root, 13, 18);
  expect(lca.data).toBe(14);
  let lca2 = BST.findLCA(BST.root, 8, 6);
  expect(lca2.data).toBe(7);
  let lca3 = BST.findLCA(BST.root, 29, 15);
  expect(lca3.data).toBe(18);
  let lca4 = BST.findLCA(BST.root, 42, 6);
  expect(lca4.data).toBe(7);
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
  
  let lca = BST.findLCA(BST.root, 0, 3);
  expect(lca).toBe(null);
  let lca2 = BST.findLCA(BST.root, 33, 3);
  expect(lca2).toBe(null);
  let lca3 = BST.findLCA(BST.root, -323, 2113);
  expect(lca3).toBe(null);
  //Here we'll test a value that exists in our BST and one that doesn't
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
  
  let lca = BST.findLCA(BST.root, 13, 13);
  expect(lca).toBe(null);

});