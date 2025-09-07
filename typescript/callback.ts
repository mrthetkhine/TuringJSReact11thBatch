function hello()
{
    console.log('Hello');
}
type CallBack = () => void;
function delayCallback(callback:CallBack)
{
    setTimeout(callback,1000);
}
function add(x:number,y:number):number
{
    return x+y;
}
function subtract(x:number,y:number):number
{
    return x - y;
}
type BinaryFun = (x:number,y:number) => number;
delayCallback(hello);
//delayCallback(add);

let fun:BinaryFun = add;
console.log('Fun ',fun(10,20));

fun = subtract;
console.log('Fun ',fun(10,20));