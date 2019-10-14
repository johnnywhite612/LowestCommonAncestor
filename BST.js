export default class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insertNumberNode(data, left = null, right = null) {
        let Node = {
            data,
            left,
            right
        };

        let currentNode;

        if (!this.root) {
            this.root = Node;
        } else {
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


    // search for a node with given data 
    search(node, data) {
        // if trees is empty return null 
        if (node === null)
            return null;

        // if data is less than node's data 
        // move left 
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data 
        // move left 
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data  
        // return node 
        else
            return node;
    }

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
        //Check if the node supplied is null
        if (node === null) {
            return null;
        }
        //Check if the input values actually exist in the BST
        if (!this.isValidValue(node, n1) || !this.isValidValue(node, n2)) {
            return null;
        }
        if (n1 === n2) {
            return null;
        }
        //Check if inputs exceed the max value
        if (n1 > Number.MAX_VALUE || n2 > Number.MAX_VALUE) {
            return null;
        }
        //Check if inputs exceed the min value
        if (n1 < Number.MIN_VALUE || n2 < Number.MIN_VALUE) {
            return null;
        }
        return this.lowestCommonAncestor(node, n1, n2);
    }

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
