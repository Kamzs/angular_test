var Functions = /** @class */ (function () {
    function Functions() {
        this.msg = 'hello worlds';
        this.fieldExample = function (zmienna) { return console.log(zmienna); };
        this.fieldExampleNoArg = function () { return console.log(2); };
    }
    Functions.prototype.printMsg = function () {
        console.log(this.msg);
    };
    Functions.prototype.printAntoherMsg = function () {
        return 'aaaa';
    };
    Functions.prototype.printString = function (message) {
        console.log(message);
    };
    Functions.prototype.printStringWithOptionalParameter = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    Functions.prototype.printStringWithOptionalParameterAndFixedValue = function (message, message2) {
        if (message2 === void 0) { message2 = 'ololol'; }
        console.log(message + ' ' + message2);
    };
    return Functions;
}());
var objectExample = new Functions();
objectExample.printMsg();
objectExample.printAntoherMsg();
objectExample.printString('przekazany string');
objectExample.printStringWithOptionalParameter('przekazany string', 'przekazany string 2');
objectExample.printStringWithOptionalParameter('przekazany string');
objectExample.printStringWithOptionalParameterAndFixedValue('przekazany string');
objectExample.fieldExample(2);
objectExample.fieldExampleNoArg();
