let b = Buffer.from([0x41, 0x42, 0x43]);
console.log('B ',b.toString());

let dead = Buffer.alloc(1024, "DEADBEEF", "hex"); 
console.log('read ',dead.readUInt32BE(0));