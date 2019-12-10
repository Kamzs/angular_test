class PrzykladZThis {

    jakisField: number = 5;

    funkcjaKtoraZwaracaFunkcje() {
        console.log(this.jakisField)

    }

}

var JakisObiekt = new PrzykladZThis();
JakisObiekt.funkcjaKtoraZwaracaFunkcje();

