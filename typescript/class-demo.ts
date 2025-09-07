class Human
{
    name : string;
    age : number = 0;

    constructor(name:string,age:number)
    {
        console.log('Human constructor');
        this.name = name;
        this.age = age;
    }
    work()
    {
        console.log('Human '+this.name+' Working');
    }
}
class Teacher extends Human
{
    subject : string;
    constructor(name:string,age:number,subject:string)
    {
        console.log('Teacher constructor');
        super(name,age);
        this.subject = subject;
    }
    work(): void {
        super.work();
        console.log('Teacher '+this.name+' Teaching '+this.subject);
    }
}
let h:Human = new Human('TK',40);
h.work();

let t:Teacher = new Teacher('TK',40,'Math');
t.work();