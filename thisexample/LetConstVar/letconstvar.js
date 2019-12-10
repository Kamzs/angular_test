"use strict";
exports.__esModule = true;
var LetConstVar = /** @class */ (function () {
    function LetConstVar(jakiesPole) {
        this.jakiesPole = jakiesPole;
    }
    LetConstVar.prototype.metoda = function () {
        for (var index = 0; index < 4; index++) {
            console.log(index);
        }
    };
    return LetConstVar;
}());
exports.LetConstVar = LetConstVar;
var object = new LetConstVar(2);
object.metoda();
console.log(object.jakiesPole);
var objektInterfejsu = ({
    name: 'kamzs',
    age: 5
});
var json = '{"name":"bartek","age":350}';
var mappedJson = JSON.parse(json);
console.log(objektInterfejsu);
console.log(mappedJson);
