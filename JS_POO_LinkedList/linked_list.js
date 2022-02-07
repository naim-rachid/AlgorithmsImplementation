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
}

////////////////////////////////

let node1 = new ListNode(6);
let node2 = new ListNode(10);
node1.next = node2;

////////

let list = new LinkedList(node1);

// 

console.log(list.head.next.data); // 10