class Parent 
{
    protected method()
    {
        console.log('Parent method');
    }
    private parentOnly()
    {
        console.log('Private method');
    }
}
class Child extends Parent
{
    display()
    {
        console.log('Child method');
        super.method();
        //super.parentOnly();
    }
}
let p:Child = new Child();
//p.method();
p.display();