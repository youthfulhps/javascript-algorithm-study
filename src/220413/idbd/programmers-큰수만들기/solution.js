export default function solution(number, k) {
  const stack = [number[0]];

  for (let i = 1; i < number.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(number.length - k);

  return stack.join("");
}
