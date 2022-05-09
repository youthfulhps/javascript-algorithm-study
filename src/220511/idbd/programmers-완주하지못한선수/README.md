## 문제 링크

https://programmers.co.kr/learn/courses/30/lessons/42576

---

## 소요 시간 및 테스트 시도 횟수

| 소요시간(m) | 테스트 시도 횟수 |
| ----------- | ---------------- |
| 5           | 1                |

---

## 문제 풀이 기록

1. participant 에 있는 참가자들 이름을 키로, +1 씩을 값으로 저장
2. completion 에 있는 완료자 이름대로 -1 씩하고 만약 값이 1이라면 delete 해버리기
3. completion의 길이는 participant 길이보다 1작으니까 Object.keys(store)[0]가 미완료자
