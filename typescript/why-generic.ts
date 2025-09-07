type Box = {
    value : number
}
let box :Box = {
    value : 10
}
type BoxStr = {
    value : string;
}
let box2 :BoxStr = {
    value : "hello"
}

type GenBox<T> = {
    value : T;
}
let box3 :GenBox<number> = {
    value : 10
}
console.log('Box3 ',box3.value * 2);
let box4:GenBox<string> = {
    value : "hello"
}
console.log('Box4 ',box4.value.toUpperCase());
