function fail(msg: string): never {
  throw new Error(msg);
}
try
{
    fail('hello');
}
catch(e)
{
    console.log('e ',e);
}

console.log('Test');