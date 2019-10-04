const fs = require('fs')
//import {readFileSync} from 'fs';
const fileName = './sample.txt';
//sync
/*
try{    
    const fileContents = fs.readFileSync(fileName, { encoding : 'utf8'});
    console.log(fileContents);
    console.log('Thats all folks!');
} catch (err){
    console.log('Something went wrong');
    console.log(err);
}
*/

//async
/*
fs.readFile(fileName, { encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log(err);
        return;
    }
    console.log(fileContents);
    console.log('Thats all folks!');
});
*/

//async - streams

const stream = fs.createReadStream(fileName, {encoding : 'utf8'});
//events -> open, data, end, close, error

/*
stream.on('data', function(chunk){
    console.log(chunk);
});
stream.on('end', function(){
    console.log('Thats all folks!');
});
stream.on('error', function(err){
    console.log(err);
})
*/
//stream.pipe(process.stdout);
let readCount = 0;
stream.on('data', function(chunk){
    console.log(chunk.length);
    ++readCount;
});
stream.on('error', function(err){
    console.log(err);
})
stream.on('end', function(){
    console.log(`Total read count = ${readCount} `);
})