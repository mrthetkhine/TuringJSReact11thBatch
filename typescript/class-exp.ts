class Something
{
    constructor(public name:string)
    {
        console.log('Something constructor ',name);
    }
}
let clazz = Something;
let obj = new clazz('TK');
console.log('Obj ',obj);