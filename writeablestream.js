const fs = require('fs');

const readablestream = fs.createReadStream('teks.txt',{
    highWaterMark : 15
});

const writableStream = fs.createWriteStream('output.txt');


readablestream.on('readable',()=>{
    try{
        // process.stdout.write(`${readablestream.write()}`);
        writableStream.write(`${readablestream.read()}\n`)
        
    } catch(error){
        console.log(error.message)
    }
    
});

readablestream.on('end',()=>{
    console.log('Done read')
})