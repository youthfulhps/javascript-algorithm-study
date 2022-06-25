function solution(jobs) {
  let answer = 0;
  let current = 0;

  jobs = jobs.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]));

  for (let job of jobs) {
    const [requestTime, duration] = job;
    const delay = current - requestTime;

    answer += delay + duration;
    current += duration;
  }

  return Math.floor(answer / jobs.length);
}