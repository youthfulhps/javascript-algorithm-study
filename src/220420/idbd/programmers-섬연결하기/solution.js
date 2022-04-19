export default function solution(n, costs) {
  let acc = 0;
  let store = [];

  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < n; i++) {
    store[i] = i;
  }

  for (let i = 0; i < costs.length; i++) {
    if (store[costs[i][0]] !== store[costs[i][1]]) {
      acc += costs[i][2];

      if (store[costs[i][0]] > store[costs[i][1]]) {
        store = store.map((el) => {
          if (el === store[costs[i][0]]) return store[costs[i][1]];
          return el;
        });
      } else {
        store = store.map((el) => {
          if (el === store[costs[i][1]]) return store[costs[i][0]];
          return el;
        });
      }
    }
  }

  return acc;
}
