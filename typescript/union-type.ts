type StringOrNumber = string | number;
function align(a: StringOrNumber) {
    if(typeof a === 'string') {
         console.log('Uppercase ',a.toUpperCase());
    }
   
    console.log('A ',a);
}
align(100);
align('hello');