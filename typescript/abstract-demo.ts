abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
class Child extends Base {
  getName() {
    return "Child";
  }
}
let b:Base = new Child();
console.log('b ',b.getName());
b.printName();