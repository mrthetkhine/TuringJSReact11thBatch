function greet(message:string):void//(message:string)=>void
{
    console.log('Greet ',message);
}
function hello()//():void
{
    console.log('Hello');
}
let fun:Function = hello;
fun();

fun = greet;
fun();