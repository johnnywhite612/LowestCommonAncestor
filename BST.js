export default class BinarySearchTree {

    // This sets up my BST and initialises the root to null
    constructor() {
        this.root = null;
    }

    // This method inserts a new node into the tree
    insertNumberNode(data, left = null, right = null) {
        // Defining the node structure
        let Node = {
            data,
            left,
            right
        };

        let currentNode;

        if (!this.root) {        // If the root node is null, initialise the root node as the node just inserted
            this.root = Node;
        } else {    // Otherwise propogate the node down the tree until a suitable spot is found

            currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = Node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = Node;

                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    break;
                }
            }
        }
    }


    // Search for a node with the given data 
    search(node, data) {
        // If the Tree is empty then return null 
        if (node === null){
            return null;
        }

        // If data is less than node's data, branch left
        else if (data < node.data){
            return this.search(node.left, data);
        }
        // If the data is less than node's data, branch right 
        else if (data > node.data){
            return this.search(node.right, data);
        }
        // If the data is equal to the node data, then return the node
        else{
            return node;
        }
    }

    //Is this value valid / does it exist in my BST??
    isValidValue(node, val) {
        if (node) {
            if (this.search(node, val) === null) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }


    findLCA(node, n1, n2) {
        // Check if the node supplied is null
        if (node === null) {
            return null;
        }
        // Check if the input values actually exist in the BST
        if (!this.isValidValue(node, n1) || !this.isValidValue(node, n2)) {
            return null;
        }
        if (n1 === n2) {
            return null;
        }
        // Check if inputs exceed the max value
        if (n1 > Number.MAX_VALUE || n2 > Number.MAX_VALUE) {
            return null;
        }
        // Check if inputs exceed the min value
        if (n1 < Number.MIN_VALUE || n2 < Number.MIN_VALUE) {
            return null;
        }
            return this.lowestCommonAncestor(node, n1, n2);
    }


    // The method for finding the LCA in the BST - called recursively
    lowestCommonAncestor(node, n1, n2) {
        if (!node) return;
        var val = node.data;
        if (n1 < val && n2 < val) {
            return this.lowestCommonAncestor(node.left, n1, n2);
        }
        if (n1 > val && n2 > val) {
            return this.lowestCommonAncestor(node.right, n1, n2);
        }
        return node;
    }
}
