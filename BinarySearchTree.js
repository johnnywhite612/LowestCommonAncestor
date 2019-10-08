export default class BinarySearchTree {

    constructor() {
        this.root = null;
    }
    
    get checkMe(){
        return 14;
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
            console.log("Try a different value");
            break;
            }
        }
        }
    }


    // lowestCommonAncestor(x, i, j) {
    //     return x;    
	// }

        lowestCommonAncestor (val, a, b) {
            if (val.data > a.data && val.data > b.data) {
                return lowestCommonAncestor(val.left, p, q);
            }
            else if (val.data < a.data && val.data < b.data) {
                return lowestCommonAncestor(val.right, a, b);
            }
            else {
                return val;
            }
        }

    }
