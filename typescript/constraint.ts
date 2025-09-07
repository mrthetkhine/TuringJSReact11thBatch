function getBigger<T extends {
                                        length : number
                                    }>(a :T, b: T):T
{
    return a.length > b.length ? a : b;
}
let x = getBigger([1,2,3],[1,2]);
console.log('X ',x);

let y = getBigger('hi','hello');
console.log(' y ',y);

//let z = getBigger(10,20);
