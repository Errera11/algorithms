
class LinkedList {

    size = 0;
    root = null;

    add(value) {
        if(this.size == 0) {
            this.root = new ArrayNode(value);
            this.size += 1;
            return true;
        }

       let node = this.root;

       while(node.next) {
             node = node.next;
       }

       node.next = new ArrayNode(value);
       this.size += 1;
    }

    length() {
        return this.size;
    }

    print() {
        let result = [];
        let node = this.root
        while(node) {
                result.push(node.value);
                node = node.next;
        }
        console.log(result);
    }
}

class ArrayNode {
    value = 0;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

const linked = new LinkedList();

linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked.add(5);
linked.add(6);

