interface Point
{
    x : number;
    y : number;
}
interface Point {
    z : number
}
let point : Point ={
    x : 10,
    y : 20,
    z : 100
}
console.log('point ',point);

interface Todo {
    id: string;
    title: string;
   
};
let todoList:Todo[] = [
    {
        id:'1',
        title:'Learn Typescript'
    },
    {
        id:'2',
        title:'Learn React'
    }
]
console.log('todolist ',todoList[0].title);