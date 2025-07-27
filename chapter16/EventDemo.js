const {EventEmitter} = require('node:events');
//console.log('EventEmitter ',EventEmitter);

const eventEmitter = new EventEmitter();

function process()
{
    setTimeout(()=>{
        console.log('Processing');
        eventEmitter.emit('customEvent',{
            message:'Hello World'
        });
    },1000);
    
}
process();
eventEmitter.on('customEvent',function(e){
    console.log('Event Fired ',e);
});
