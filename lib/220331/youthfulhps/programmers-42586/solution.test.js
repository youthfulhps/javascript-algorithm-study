import { expect } from "chai";
import solution from "./solution";

describe("기능개발", function () {
  it("basic case", function () {
    expect(solution([93, 30, 55], [1, 30, 5])).to.eql([2, 1]);
  });
  it("edge case", function () {
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).to.eql([
      1, 3, 2,
    ]);
  });
});
