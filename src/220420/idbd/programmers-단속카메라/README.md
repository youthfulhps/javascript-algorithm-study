## 문제 링크

https://programmers.co.kr/learn/courses/30/lessons/42884

## 프로그래머스-단속카메라

## 소요 시간 및 테스트 시도 횟수

| 소요시간(m) | 테스트 시도 횟수 |
| ----------- | ---------------- |
| 60          | 2                |

---

## 문제 풀이 기록

> 1. 첫 차량이 나간 시점에 카메라 설치
> 2. 다음 차량의 진입 시점이 현재 카메라 위치보다
>
> - 크면 => 다음 차량의 나간 시점에 새로운 카메라 설치
> - 작으면 => 다음 차량의 나간 시점이 현재 카메라 위치보다
>   - 크면 => 아무것도 안함
>   - 작으면 => 다음 차량의 나간 시점으로 카메라 위치를 옮겨온다.
