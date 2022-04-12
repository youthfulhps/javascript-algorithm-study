export default function solution(people, limit) {
  let countBoat = 0;
  let first = 0;
  let last = people.length - 1;
  people.sort((a, b) => a - b);

  while (first <= last) {
    if (people[last] < (limit / 2) >> 0) {
      first++;
      last++;
    }

    if (people[first] + people[last] > limit) {
      last--;
    } else {
      first++;
      last--;
    }
    countBoat++;
  }

  return countBoat;
}
