const net = require('node:net');

let server = net.Server();

function writeResponse(socket)
{
    let body = "<h1>Hello World</h1>";

    let httpResponse ="HTTP/1.1 200 OK\r\n"
    +'Content-Type: text/html\r\n'
    +'Connection: Closed\r\n'
    +`Content-Length :${body.length}\r\n`
    +'\r\n'
    +`${body}`;
    
    console.log('http response');
    console.log(httpResponse);

    socket.write(httpResponse);
    socket.end();
};

console.log('start');
server.on('connection',socket=>{
    console.log('on connection ',socket.remoteAddress, ' port ',socket.remotePort);
    socket.on('data',data=>{
        //console.log('Data ',data.toString());
        let httpRequest = data.toString();
        let lines = httpRequest.split('\r\n');
        
        console.log('http request ');
        let statusLine = lines[0];
        let statusLines = statusLine.split(' ');
        let url = statusLines[1];
        console.log('request url ',url);
        console.log('---------------');
        console.log(httpRequest);
        console.log('---------------');

        writeResponse(socket);
        socket.end(data.toString().toUpperCase() +new Date().toLocaleString()+'\r\n');
    });
    
});
server.listen(3000, function() {
    console.log("Server is listening");
});
console.log('end');
