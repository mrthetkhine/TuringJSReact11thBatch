const { readFile } = require('node:fs/promises');

async function read()
{
    try
    {
        let data = await readFile('./helloworld.js','utf-8');
        console.log('Data done ',data);
    
    }
    catch(e)
    {
        console.log('error ',e);
    }
}
read();

console.log('end');