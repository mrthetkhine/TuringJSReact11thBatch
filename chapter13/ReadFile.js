const fs = require('node:fs');
//console.log(fs);
console.time('timer');
console.timeLog('timer','Read start');
fs.readFile('./hello.txt','utf-8',(err,data)=>{
    if(!err)
    {
        console.timeLog('timer','Data ',data.toString().length);
    }
   
});
console.timeLog('timer','End');