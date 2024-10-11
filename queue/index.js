// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the queue
    add(element) {
        this.items.push(element);
    }

    // Remove and return the front element of the queue
    remove() {
        return this.items.shift();
    }
}

module.exports = Queue;