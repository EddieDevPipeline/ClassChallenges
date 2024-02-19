class MySpecialList {
  constructor(items) {
    this.items = items;
    this.takeFromStart = true;
  }

  pop() {
    if (this.items.length === 0) {
      return "";
    }

    if (this.takeFromStart) {
      this.takeFromStart = !this.takeFromStart;
      return this.items.shift();
    } else {
      this.takeFromStart = !this.takeFromStart;
      return this.items.pop();
    }
  }
}

const funList = new MySpecialList([1, 2, 3, 4, 5]);
console.log(funList.pop());
console.log(funList.pop());
console.log(funList.pop());
console.log(funList.pop());
console.log(funList.pop());
console.log(funList.pop());
