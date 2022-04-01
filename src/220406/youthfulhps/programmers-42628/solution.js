function solution(operations) {
  const answer = [];

  const min = [];
  const max = [];

  for (let operation of operations) {
    const [action, value] = operation.split(' ');

    switch (action) {
      case 'I':
        min.push(Number(value));
        max.push(Number(value));
        break;
      case 'D':
        if (value === '1') {
          min.pop();
          max.shift();
        } else {
          min.shift();
          max.pop();
        }
        break;
    }

    min.sort((a,b) => a - b);
    max.sort((a,b) => b - a);
  }

  answer[0] = max[0] || 0;
  answer[1] = min[0] || 0;

  return answer;
}