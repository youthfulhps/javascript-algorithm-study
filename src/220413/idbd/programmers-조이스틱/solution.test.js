import { expect } from "chai";
import solution from "./solution";

describe("조이스틱", function () {
  it("basic case", function () {
    expect(solution("LABLPAJM")).to.eql(61);
    expect(solution("BMOABA")).to.eql(30);
    expect(solution("LAABAA")).to.eql(15);
    expect(solution("AAAAAAAAJAAAA")).to.eql(14);
    expect(solution("SAAAAAARRM")).to.eql(41);
    expect(solution("RABAMATAWADLAFAVAAE")).to.eql(78);
    expect(solution("XAAAAAABA")).to.eql(6);
    expect(solution("AYOZAAVADAY")).to.eql(35);
    expect(solution("AAFEASAAVA")).to.eql(30);
    expect(solution("UAGAAASAAFAFXZA")).to.eql(47);
    expect(solution("AAAAZAATAEA")).to.eql(19);
    expect(solution("AACALATLAHABAA")).to.eql(50);
    expect(solution("FAWJAAAFV")).to.eql(35);
    expect(solution("AACAVAAPSAAOAA")).to.eql(49);
    expect(solution("AKAAWAKX")).to.eql(33);
    expect(solution("LOAAAHAJAAFAEBAWO")).to.eql(79);
    expect(solution("AWAWVAQVAAA")).to.eql(35);
    expect(solution("RCETAAAAVUEAETZAAAK")).to.eql(75);
    expect(solution("GTAASKKAE")).to.eql(52);
    expect(solution("AAAABAAAAAAKSAIQ")).to.eql(49);
    expect(solution("ADASAAAUAAAPAA")).to.eql(39);
    expect(solution("AAAAADBAAELSPUAAAOA")).to.eql(70);
    expect(solution("VJAAIAFNAAAAA")).to.eql(47);
    expect(solution("AARUAUAAHTBJAAYS")).to.eql(69);
    expect(solution("IASAGITUPHE")).to.eql(74);
    expect(solution("AAALAAAAAA")).to.eql(14);
    expect(solution("AAAEASAHQAYTAAAJ")).to.eql(60);
    expect(solution("BAALEAAAPMAAAHSRAV")).to.eql(83);
    expect(solution("ASWAAATDAJAXA")).to.eql(45);
    expect(solution("DYAOAAAARQANAWA")).to.eql(66);
    expect(solution("AAIAPB")).to.eql(24);
  });
});
