class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));

/*
class Group {
  constructor() {
    this.data = new Set();
  }

  add(value) {
    if (!this.data.has(value)) {
      this.data.add(value);
    }
  }

  delete(value) {
    this.data.delete(value);
  }

  has(value) {
    return this.data.has(value);
  }

  static from(iterable) {
    const group = new Group();
    for (const item of iterable) {
      group.add(item);
    }
    return group;
  }
}

// Example usage
const group = new Group();
group.add(1);
group.add(2);
group.add(2); // Doesn't add duplicate

console.log(group.has(1)); // Output: true
console.log(group.has(3)); // Output: false

const group2 = Group.from([3, 4, 5, 4]); // Creates Group with unique values [3, 4, 5]
*/