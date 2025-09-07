function sum(a:number,...nums:number[]) {
    return a+ nums.reduce((a,b) => a+b);
}
console.log('Sum ',sum(1,2));    
console.log('Sum ',sum(1,2,3));    