import { expect } from "chai";
import solution from "./solution";

describe("구명보트", function () {
  it("basic case", function () {
    expect(solution([70, 50, 80, 50], 100)).to.eql(3);
    expect(solution([70, 80, 50], 100)).to.eql(3);
  });
});
