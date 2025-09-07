class UniqueId
{
    static golbalId = 0;

    uniqueId: number;

    static{
        console.log('Static block 1');
    }
    static{
        console.log('Static block 2');
    }
    constructor()
    {
        this.uniqueId = ++UniqueId.golbalId;
    }
    print()
    {
        console.log('ID ',this.uniqueId);
        UniqueId.staticMethod();
    }
    static staticMethod()
    {
        console.log('Static Method');
        //this.print();
    }
}
let obj:UniqueId = new UniqueId();
let obj2:UniqueId = new UniqueId();

obj.print();
obj2.print();

console.log('Unique Id ',UniqueId.golbalId);
UniqueId.staticMethod();