type Human = {
    readonly name : string
    age : number    
    readonly address : Address
}
type Address = {
    city : string,
    township : string
}
let h :Human = {
    name : "TK",
    age:  41,
    address: {
        city : "YGN",
        township : "Somewhere"
    }
}
//h.name= "Anyone";
console.log('h ',h);
/*
h.address = {
     city : "YGN",
        township : "Somewhere"
}
*/
h.address.city = "MDY";
console.log('H ',h);