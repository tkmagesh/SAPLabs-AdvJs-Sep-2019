const http = require('http');

// req - IncomingMessage (class) inherits from ReadableStream
// res - ServerResponse (class) inherits from WritableStream

const server = http.createServer((req, res) => {
    console.log(`A new connection is established - ${req.url}`);
    res.write('<h1>Welcome to Node.js</h1>');
    res.end();
});

server.listen(8080);

server.on('listening', () => console.log('Server listening on 8080!!'));