const net = require('node:net');

let server = net.Server();

server.on('connection',socket=>{
    console.log('on connection ',socket.remoteAddress, ' port ',socket.remotePort);
    socket.on('data',data=>{
        console.log('Data ',data.toString());
        socket.end(data.toString().toUpperCase() +new Date().toLocaleString()+'\r\n');
    });
    
});
server.listen(3000, function() {
    console.log("Server is listening");
});
