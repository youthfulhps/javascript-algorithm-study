export default function solution(name) {
  let verticalMove = 0;
  let horizontalMove = name.length - 1;
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );

  for (let i = 0; i < name.length; i++) {
    const foundIndex = alphabet.indexOf(name[i]);
    verticalMove += Math.min(foundIndex, alphabet.length - foundIndex);

    let untilAEnd = i + 1;

    while (name[untilAEnd] === "A" && name.length > untilAEnd) {
      untilAEnd++;
    }
    horizontalMove = Math.min(horizontalMove, i * 2 + name.length - untilAEnd);
    horizontalMove = Math.min(
      horizontalMove,
      (name.length - untilAEnd) * 2 + i
    );
  }

  return verticalMove + horizontalMove;
}
