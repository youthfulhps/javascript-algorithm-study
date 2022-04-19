import { expect } from "chai";
import solution from "./solution";

describe("큰수 만들기", function () {
  it("basic case", function () {
    expect(solution("1924", 2)).to.eql("94");
    expect(solution("1231234", 3)).to.eql("3234");
    expect(solution("4177252841", 4)).to.eql("775841");
  });
});
