type Position = { 
    x : number,
    y : number,
    z?:number   
}
function displayPosition(pos:Position)
{
    console.log('Position x ' ,pos.x, ' y ',pos.y, ' z ',pos.z);
}
displayPosition({
    x:10,
    y:20,
    z:100,
});