export default function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let releaseCount = 0;

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      releaseCount++;
    }

    if (releaseCount) {
      result.push(releaseCount);
      releaseCount = 0;
    }
  }

  return result;
}
