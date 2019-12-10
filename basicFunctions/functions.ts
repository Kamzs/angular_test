class Functions{
 
    msg: string = 'hello worlds';

    printMsg(){
        console.log(this.msg)
    }

    printAntoherMsg() : string {
        return 'aaaa'
    }

    printString( message : string) : void{
        console.log(message);
    }
    printStringWithOptionalParameter( message : string, message2? : string) : void{
        console.log(message+' '+message2);
    }
    printStringWithOptionalParameterAndFixedValue( message : string, message2 = 'ololol') : void{
        console.log(message+' '+message2);
    }

    fieldExample = zmienna => console.log(zmienna);
    fieldExampleNoArg = () => console.log(3);

}

var objectExample = new Functions();
objectExample.printMsg();
objectExample.printAntoherMsg();
objectExample.printString('przekazany string');
objectExample.printStringWithOptionalParameter('przekazany string','przekazany string 2');
objectExample.printStringWithOptionalParameter('przekazany string');
objectExample.printStringWithOptionalParameterAndFixedValue('przekazany string');
objectExample.fieldExample(2);
objectExample.fieldExampleNoArg();
