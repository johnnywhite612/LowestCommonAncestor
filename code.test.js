import BinarySearchTree from './BinarySearchTree';

it('First Test', () => {
  let BST = new BinarySearchTree();

  BST.insertNumberNode(7);
  BST.insertNumberNode(14);
  BST.insertNumberNode(5);
  BST.insertNumberNode(13); 
  BST.insertNumberNode(8);
  BST.insertNumberNode(18);
  BST.insertNumberNode(15);
  BST.insertNumberNode(6);

  /*
  BST Looks like the following
              7
            /   \
          5     14
        / \     /  \
           6   13    18
              / \   / \ 
             8     15
  */
  
  let lca = BST.lowestCommonAncestor(BST.root, 8, 15);
  console.log(lca.data);
  expect(lca.data).toBe(4);
});

  

