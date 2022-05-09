import { expect } from "chai";
import solution from "./solution";

describe("완주하지 못한 선수", function () {
  it("basic case", function () {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).to.eql("leo");
    expect(
      solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
      )
    ).to.eql("vinko");
    expect(
      solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"]
      )
    ).to.eql("mislav");
  });
});
