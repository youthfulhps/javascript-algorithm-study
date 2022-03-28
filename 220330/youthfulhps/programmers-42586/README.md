# 프로그래머스, 기능개발

### 문제 링크

https://programmers.co.kr/learn/courses/30/lessons/42586

### 소요 시간 및 테스트 시도 횟수

| 소요시간(m) | 테스트 시도 횟수 |
| ----------- | ---------------- |
| 30          | 2                |

### 문제 풀이 기록

```text
solution(progresses, speeds)
result

while progresses.length
for progresses[i]+=speeds[i];

count

while progresses[0] >= 100
  progresses.shift
  speeds.shift
  count++

if v
  result.push(count)
  count = 0
```

1. 하루동안의 각 speed를 각 progress에 추가한다.
2. 앞에 존재하는 작업이 완료(100%)가 되지 못하면 배포할 수 없다.
3. progresses의 0번 째가 100보다 크거나 같을 때까지 shift하고, speeds 또한 shift한다.
4. shift된 갯수를 result에 추가한다.

### 놓친 점

1. progress가 shift되면, speeds 또한 shift해주어야 하는데 첫 테스트 시 speed를 shift하지 않았다.
