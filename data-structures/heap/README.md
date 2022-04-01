# Heap

힙은 '우선 순위 큐'의 개념을 구현하기 위한 가장 적합한 방법이다. 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 바로 정렬되는 특징이 있다.

![heap](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/220px-Max-Heap.svg.png);

## 우선 순위 큐

_여기서 '우선 순위 큐'는 자료 구조가 아니며, 개념임을 유의해야 한다._

일반적인 큐(Queue)는 FIFO(First input First output) 구조인 반면, 우선 순위 큐는 우선 순위가 높은 요소가 먼저 나가는 구조이다.

## 힙의 특징

- 우선 순위가 높은 요소가 먼저 나가는 특징을 가진다.
- 루트가 가장 큰 값이 되는 _최대 힙(Max Heap)_, 루트가 가장 작은 값이 되는 _최소 힙(Min Heap)_ 이 있다.

_자바스크립트에서는 직접 구현해서 사용해야 한다._

## 힙 구현 (MaxHeap 기준)

```js
class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }
}
```

### 힙 요소 추가 알고리즘

- 요소가 추가될 때는 가장 마지막 정점에 위치시킨다.
- 이후, 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
- 더이상 순서가 바뀌지 않을때까지 반복하여 적절한 위치를 찾는다.
- 완전 이진 트리의 높이는 logN이기에 힙의 요소 추가 알고리즘은 O(logN) 시간복잡도를 가진다.

```js
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
```

### 힙 요소 제거 알고리즘

- 요소 제거는 루트 정점에서만 가능하다.
- 루트 정점을 제거한 후 가장 마지막 정점을 루트에 위치시킨다.
- 루트 정점의 두 자식 정점 중 우선순위가 높은 정점과 바꾼다.
- 두 자식 정점이 우선 순위가 더 낮을 때까지 반복한다.
- 완전 이진 트리의 높이는 logN이기에 힙 요소 제거 알고리즘은 O(logN) 시간 복잡도를 가진다.

```js
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
```

## 힙 구현 (MinHeap 기준)

### 힙 요소 추가 알고리즘

```js
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
```

### 힙 요소 삭제 알고리즘

```js
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
```

### 부가적인 유틸

```js
swap (a, b) {
  [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
}

size () {
  return this.heap.length -1;
}
```
