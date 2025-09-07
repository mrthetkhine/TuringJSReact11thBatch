class Box<T>
{
    value : T;
    constructor(value:T)
    {
        this.value = value;
    }
}
let box = new Box<string>('hello');
console.log('Box ',box.value);

let box2 = new Box<number>(10);
console.log('Box2 ',box2.value);