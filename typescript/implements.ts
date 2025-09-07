interface Flyable
{
    fly():void;
}
class Bird implements Flyable
{
    fly(): void {
        console.log("Bird Flying ");
    }
}
class Aeroplane implements Flyable
{
    fly(): void {
        console.log("Aeroplane Flying ");
    }
}
let flyable : Flyable = new Bird();
flyable.fly();

flyable = new Aeroplane();
flyable.fly();