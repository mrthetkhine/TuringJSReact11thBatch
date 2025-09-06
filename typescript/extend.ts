interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}


const bear:Bear = {
    name : "Bear1",
    honey : true
}
console.log('bear ',bear);

interface Point2D {
    x :number;
    y : number;
}
interface Point3D extends Point2D {
    z : number
}