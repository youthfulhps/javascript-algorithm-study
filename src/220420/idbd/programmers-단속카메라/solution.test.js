import { expect } from "chai";
import solution from "./solution";

describe("단속카메라", function () {
  it("basic case", function () {
    expect(
      solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
      ])
    ).to.eql(2);
    expect(
      solution([
        [-2, -1],
        [1, 2],
        [-3, 0],
      ])
    ).to.eql(2);
    expect(
      solution([
        [0, 1],
        [0, 1],
        [1, 2],
      ])
    ).to.eql(1);
    expect(
      solution([
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
      ])
    ).to.eql(4);
    expect(
      solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
      ])
    ).to.eql(2);
    expect(
      solution([
        [-20, 15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
      ])
    ).to.eql(2);
    expect(
      solution([
        [-20, 15],
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
      ])
    ).to.eql(2);
  });
});
