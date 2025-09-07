let anyObject :object; 
anyObject = {x:10,y:20};
console.log('anyObject ',anyObject);

type MyObject = {};

let another:MyObject =  {x:10,y:20};
console.log('another ',another);

anyObject = function(){
    console.log('Function');
}
//anyObject();
//anyObject = "Hello";

let anything : any = {
    x : 10,
    y : 20
};
console.log('Anything.x ',anything.x);

let data : unknown = {
    x : 10,
    y : 20
}
console.log('Data ',data);
data = "Hello";
console.log('Data ',data);