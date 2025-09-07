type Pair<T, U> = [T, U];
type PairStringNumber = Pair<string, number>;
type PairNumberString = Pair<number, string>;
let a : PairNumberString = [10,'hello'];
console.log('A ',a[0].toFixed(), ' A[1] ',a[1].toUpperCase());

type CustomPair<T,U> = {
    first : T,
    second : U
}
let pair : CustomPair<number,string> = {
    first : 10,
    second : 'hello'
}
console.log('First ',pair.first, ' second ',pair.second);

