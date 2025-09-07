
type Position = {
    x : number;
    y : number;
}
function showPos({
                        x,
                        y
                    }:Position)
{
    //let x = pos.x;
    //let y = pos.y;
    console.log('X ',x , ' y',y);
}
showPos({
    x : 10,
    y: 20
})