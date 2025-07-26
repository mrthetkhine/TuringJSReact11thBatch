const fs = require('node:fs');

console.log('Fs ',fs);
fs.readFile('./helloworld.js','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('Data ',data.toString());
    }
});
console.log('end');