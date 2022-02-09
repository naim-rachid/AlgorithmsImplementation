class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    // size() method returns the number of nodes present in the linked list.
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    // clear() method empties out the list.
    clear() {
        this.head = null;
        console.log("Linked List is empty");
    }
    // getLast() method returns the last node of the linked list.
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    // getFirst() method returns the first node of the linked list.
    getFirst() {
        return this.head;
    }
    // adds an element at the end of list
    insertEnd(element) {
        let node = new ListNode(element);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
    }
    // print all the list nodes
    showList() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
    
}

////////////////////////////////

let node1 = new ListNode(6);
let node2 = new ListNode(10);
let node3 = new ListNode(12);
node1.next = node2;
node2.next = node3;

////////

let list = new LinkedList(node1);

// 
console.log(list.head.next.data); // 10

//
console.log("The size of the list : " + list.size()); // 2

//
console.log("--> Last node in the linked list : ");
console.log(list.getLast());

//
console.log("--> First node in the linked list : ");
console.log(list.getFirst());

list.showList();

// list.clear();
// console.log(list); // List is Null

// 
list.insertEnd(3);
console.log("After insertion : ");
list.showList();
