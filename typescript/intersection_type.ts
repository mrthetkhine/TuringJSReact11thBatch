type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear:Bear = {
    name : 'Bear1',
    honey : true
}
type Rectangle = {
    width: number;
    height: number;
}
type Circle = {
    radius : number
}
type Colored = {
    color : string
}
type ColoredRect = Rectangle & Colored;
type ColoredCircle = Circle & Colored;

let cRect:ColoredRect = {
    width : 10,
    height : 20,
    color : 'red'
}
console.log('cRect ',cRect);