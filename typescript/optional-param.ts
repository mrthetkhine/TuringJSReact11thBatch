function greet(message?:string,second?:string)
{
    console.log('Greet ',message?.toLowerCase());
    console.log('Greet second ',second?.toLowerCase());
}
greet('hello','second parameter');
greet();

function show(message="hello")
{
    console.log('Show ',message);
}
show();
show('hi')