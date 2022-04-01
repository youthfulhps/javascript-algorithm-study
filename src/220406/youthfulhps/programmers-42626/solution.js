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
    //첫 번째 요소를 return 값에 참조시킨다.
    //첫 번째 요소를 제거한다.
    //마지막 요소를 루트에 넣는다.
    //루트 요소의 자리를 찾아간다.

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


function solution(scoville, K) {
  let answer = 0;
  const minHeap = new MinHeap();

  for (let value of scoville) {
    minHeap.push(value);
  } 

  while (minHeap.heap[1] < K && minHeap.size() > 2) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixed = first + second * 2;
    minHeap.push(mixed);
    answer++;

  }

  return minHeap.heap[1] < K ? -1 : answer;

}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

// export default solution;





