
class BinaryTree {

    root = null;

    add(value) {
        if(!this.root) {
            this.root = new TreeNode(value);
            return true;
        }

        let node = this.root;
        let newNode = new TreeNode(value);

        while(node) {
            if(value > node.value) {
                if(!node.rightNode) break
                node = node.rightNode;
            } else {
                if(!node.leftNode) break
                node = node.leftNode;
            }
        }

        if(value > node.value) {
            node.rightNode = newNode;
        } else {
            node.leftNode = newNode;
        }
    }

    print(root = this.root) {
        if(!root) return true;
        console.log(root.value);

        this.print(root.leftNode);
        this.print(root.rightNode);
    }


}

class TreeNode {

    rightNode = null;
    leftNode = null;
    value = 0;
    constructor(value) {
        this.value = value;
    }

}

let tree = new BinaryTree();

tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);


tree.print();