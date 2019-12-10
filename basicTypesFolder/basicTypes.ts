export class BasicType{

    name: string = 'kamzs';
    
    age: number = 11.50;
    
    //2 sposoby na zrobienie arraya
    colors: string[] = ['czerny','bialy'];
    dates: Array<Date> = [new Date(), new Date()];

    //w TS mozliwa 2 elementowa krotka (tj. tablica przechowujaca zmienne roznego typu)
    pair: [string,number] = ['poniedzialek',1];

    //w TS jest typ, ktory przyjmuje cokolwiek
    cokolwiek: any = 'asdasdasdas';

    

}