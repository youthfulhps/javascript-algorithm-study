class Heap {
  constructor () {
    this.heap = [null];
  }

  swap (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length -1;
  }
}

class MinHeap extends Heap {
  push (value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);   

    while (parentIndex !== 0 && 
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop () {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (
      this.heap[leftChildIndex] !== undefined &&
      (this.heap[leftChildIndex] < this.heap[currentIndex] ||
        this.heap[rightChildIndex] < this.heap[currentIndex])
    ) {
      let smallerIndex = leftChildIndex;

      if (
        this.heap[rightChildIndex] !== undefined &&
        this.heap[rightChildIndex] < this.heap[smallerIndex]
      ) {
        smallerIndex = rightChildIndex;
      }

      this.swap(currentIndex, smallerIndex);
      currentIndex = smallerIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = (currentIndex *2) + 1;
    }
    return returnValue;
  }
}

class MaxHeap extends Heap {
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length -1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      this.heap[parentIndex] !== undefined && 
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop () {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (
      this.heap[currentIndex] > this.heap[leftChildIndex] ||
      this.heap[currentIndex] > this.heap[rightChildIndex]
    ) {
      if (this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
        this.swap(currentIndex, rightChildIndex);
        currentIndex = rightChildIndex;
      } else {
        this.swap(currentIndex, leftChildIndex);
        currentIndex = leftChildIndex;
      }

      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}


 