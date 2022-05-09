export default function solution(participant, completion) {
  const store = {};

  for (const name of participant) {
    if (store[name]) {
      store[name] += 1;
    } else {
      store[name] = 1;
    }
  }

  for (const name of completion) {
    if (store[name] === 1) {
      delete store[name];
    } else {
      store[name] -= 1;
    }
  }

  return Object.keys(store)[0];
}
