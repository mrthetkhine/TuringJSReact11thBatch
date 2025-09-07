function greet()
{
    console.log('Greet');
}
greet.description = "This function print greet";

function another()
{
    console.log('Another');
}
type FunWithDescription= {
    ():void,
    description : string
}
let fun : FunWithDescription = greet;
console.log('fun ',fun.description);

//fun = another;