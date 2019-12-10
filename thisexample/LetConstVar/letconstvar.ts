export class LetConstVar {

    jakiesPole : number;

    constructor(jakiesPole?: number){
        this.jakiesPole = jakiesPole;

    }

    metoda() {
        for (let index = 0; index < 4; index++) {
            console.log(index);
        }
    }
}

let object = new LetConstVar(2);
object.metoda();
console.log(object.jakiesPole);

interface Person {
    name: string;
    age?: number;
}

let objektInterfejsu: Person = ({
    name : 'kamzs',
    age : 5
    }
)

let json : string = '{"name":"bartek","age":350}';
let mappedJson : Person = JSON.parse(json);
console.log(objektInterfejsu);
console.log(mappedJson);

