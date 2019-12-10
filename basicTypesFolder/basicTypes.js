var BasicType = /** @class */ (function () {
    function BasicType() {
        this.name = 'kamzs';
        this.age = 11.50;
        //2 sposoby na zrobienie arraya
        this.colors = ['czerny', 'bialy'];
        this.dates = [new Date(), new Date()];
        //w TS mozliwa 2 elementowa krotka (tj. tablica przechowujaca zmienne roznego typu)
        this.pair = ['poniedzialek', 1];
        //w TS jest typ, ktory przyjmuje cokolwiek
        this.cokolwiek = 'asdasdasdas';
    }
    return BasicType;
}());
