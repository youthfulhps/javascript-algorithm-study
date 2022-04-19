## 문제 링크

---

https://programmers.co.kr/learn/courses/30/lessons/42586

## 소요 시간 및 테스트 시도 횟수

| 소요시간(m) | 테스트 시도 횟수 |
| ----------- | ---------------- |
| 190         | 5                |

---

## 문제 풀이 기록

### 1. 첫번째 시도

> combination인가?

- 순서 상관없이 모든 조합을 구하고
- 조합대로 글자를 삭제해 보고 최댓값 저장
- 다음 조합대로 글자를 삭제하고 최댓값 업데이트
- 하지만 number 문자열이 2 이상 100만 이하,, (시간초과가 날게 분명)

### 2. 두번째 시도

> 제일 큰수가 되려면 숫자가 큰 순서대로 앞에 남겨야 한다.

- number를 순회한다.
- 현재 인덱스의 number가 뒤에 인덱스의 number보다 작으면 현재 인덱스의 number를 버린다.

```
현재 인덱스 값 다음 인덱스 값 비교
  현재 인덱스가
    작으면: 현재 인덱스 삭제, 인덱스 1 감소
    크면: 인덱스 1 증가
삭제개수를 채우지 못하면 채우지 못한만큼 뒤에서 삭제
```

> 10번 케이스 시간 초과

- 문자열 길이가 100만일 경우 어쨌든 100만번의 반복이 발생 (On)
- \+ splice 자체의 시간복잡도가 On 이기 때문에 => 코드 전체적인 시간 복잡도는 On^2. (100만 \* 100만개ㅠㅠ)

```
function solution(number, k) {
    const numberArr = number.split('');
    let count = 0;
    let index = 0;

    while (count < k && index < numberArr.length - 1) {
        if (numberArr[index] < numberArr[index + 1]) {
            numberArr.splice(index, 1);
            count++;
            index--;
        } else {
           index++;
        }
    }

    numberArr.splice(number.length - k);
    return numberArr.join('');
}
```

### 3. 최적화

> 스택 자료구조를 이용하면 On의 시간복잡도로 해결할 수 있다.
>
> (On^2의 모양이긴 하나, 조건에 의해 다 돌지 않을 것)

- 스택에 있는 요소들과 현재 인덱스 값과 비교
  1. 스택 pop
  2. 현재 인덱스 값과 pop된 요소 비교
  3. 현재 인덱스 값이 크면 1~3 반복
  4. 현재 인덱스 값이 작으면 pop 된 요소를 다시 넣는다.
  5. 현재 인덱스 값을 스텍에 푸시한다.
  6. k만큼 삭제를 못하는 경우에 대비해서 k만큼 뒤에서 삭제.

```
function solution(number, k) {
    const stack = [number[0]];

    for (let i = 1; i < number.length; i++) {
        while (k > 0 && stack.length) {
            const popped = stack.pop();

            if (popped >= number[i]) {
                stack.push(popped);
                break;
            } else {
                k--;
            }
        }
        stack.push(number[i]);
    }
    stack.splice(number.length - k);

    return stack.join('');
}
```

> (\+ 리펙토링) pop을 무조건 하지 않아도 된다.

- `stack[stack.length - 1] < number[i]` 라는 조건을 while문에 추가해주면 pop을 하고 pop 된 요소를 다시 push 하지 않아도 된다.

```
function solution(number, k) {
    const stack = [number[0]];

    for (let i = 1; i < number.length; i++) {
        while (k > 0 && stack.length && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(number.length - k);

    return stack.join('');
}
```
