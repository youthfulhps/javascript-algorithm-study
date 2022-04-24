import { expect } from "chai";
import solution from "./solution";

describe("섬연결하기", function () {
  it("basic case", function () {
    expect(
      solution(5, [
        [0, 1, 5],
        [1, 2, 3],
        [2, 3, 3],
        [3, 1, 2],
        [3, 0, 4],
        [2, 4, 6],
        [4, 0, 7],
      ])
    ).to.eql(15);
    expect(
      solution(5, [
        [0, 1, 1],
        [3, 4, 1],
        [1, 2, 2],
        [2, 3, 4],
      ])
    ).to.eql(8);
    expect(
      solution(4, [
        [0, 1, 5],
        [1, 2, 3],
        [2, 3, 3],
        [1, 3, 2],
        [0, 3, 4],
      ])
    ).to.eql(9);
    expect(
      solution(5, [
        [0, 1, 1],
        [3, 1, 1],
        [0, 2, 2],
        [0, 3, 2],
        [0, 4, 100],
      ])
    ).to.eql(104);
    expect(
      solution(6, [
        [0, 1, 5],
        [0, 3, 2],
        [0, 4, 3],
        [1, 4, 1],
        [3, 4, 10],
        [1, 2, 2],
        [2, 5, 3],
        [4, 5, 4],
      ])
    ).to.eql(11);
    expect(
      solution(5, [
        [0, 1, 1],
        [2, 3, 1],
        [3, 4, 2],
        [1, 2, 2],
        [0, 4, 100],
      ])
    ).to.eql(6);
    expect(
      solution(5, [
        [0, 1, 1],
        [0, 4, 5],
        [2, 4, 1],
        [2, 3, 1],
        [3, 4, 1],
      ])
    ).to.eql(8);
    expect(
      solution(5, [
        [0, 1, 1],
        [0, 2, 2],
        [0, 3, 3],
        [0, 4, 4],
        [1, 3, 1],
      ])
    ).to.eql(8);
  });
});
