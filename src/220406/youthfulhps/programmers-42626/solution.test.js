import { expect } from "chai";
import solution from "./solution";

describe("더 맵게", function () {
  it("basic case", function () {
    expect(solution([1, 2, 3, 9, 10, 12], 7)).to.eql(2);
  });
  it("edge case", function () {
    expect(solution([0,0,0,0,0,0], 8)).to.eql(-1);
  });
});
