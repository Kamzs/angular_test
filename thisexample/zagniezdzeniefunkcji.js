var PrzykladZThis = /** @class */ (function () {
    function PrzykladZThis() {
        this.jakisField = 5;
    }
    PrzykladZThis.prototype.funkcjaKtoraZwaracaFunkcje = function () {
        console.log(this.jakisField);
    };
    return PrzykladZThis;
}());
var JakisObiekt = new PrzykladZThis();
JakisObiekt.funkcjaKtoraZwaracaFunkcje();
