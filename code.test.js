import BinarySearchTree from './BinarySearchTree';
import Meetup from './Meetup';

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
  
  let lca = BST.lowestCommonAncestor(BST, 8, 15);
  expect(lca).toBe(4);

});

  

