class Mamal
{
    constructor(public name:string)
    {
        console.log('Mamal constuctor ',name);
    }
}
class Human extends Mamal
{
    constructor(public name:string)
    {
        super(name);
        console.log('Human constuctor',name);
    }
}
type Con = {
    new (name:string):Mamal
}
let con = Human;
let human = new con('TK');
console.log('human ',human);

con = Mamal;
let mamal = new con('Someone');
console.log('mamal ',mamal);