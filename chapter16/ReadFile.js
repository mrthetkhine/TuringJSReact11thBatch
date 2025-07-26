const { readFile } = require('node:fs/promises');

readFile('./helloworld.js','utf-8')
    .then(data=>console.log('Fileread done',data))
    .catch(err=>console.log(err));
console.log('end');