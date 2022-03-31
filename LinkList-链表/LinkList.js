class LinkNodeList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(val) {
        let node = new Node(val);
        // 如果还未有头节点，链表为空，当前节点赋值给head
        if (!this.head) {
            this.head = node;
        } else {
            let tempNode = this.head;
            // 找到当前链表最后的节点，然后把该节点的next指向当前节点
            while (tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        }
        this.length++;
    }
    print() {
        let text = "";
        let tempNode = this.head;
        if (this.head) {
            while (tempNode.next) {
                text += tempNode.val + "=>";
                tempNode = tempNode.next;
            }
            text += tempNode.val;
            console.log(text);
        } else {
            console.log("empty linklist");
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 链表 1 => 2 => 3 => 4
let linkList = new LinkNodeList();
linkList.append("1");
linkList.append("2");
linkList.print();
console.log(linkList.length);
