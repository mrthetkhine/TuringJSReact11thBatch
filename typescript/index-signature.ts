type CustomMap ={
    [index:string]:string
}
type CustomArray = {
    [index:number]:string
}
let map : CustomMap = {
    "key1":"value1",
    "key2":"value2"
}
console.log('Map ',map["key1"]);

let strArr: CustomArray = ["value1","122"];
console.log('StrArr ',strArr[0]);