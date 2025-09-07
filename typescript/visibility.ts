class Greeter {
  public greet() {
    console.log("hi!");
    this.greet2();
  }
  private greet2() {
    console.log("hi2!");
  }
}
const g = new Greeter();
g.greet();
//g.greet2();