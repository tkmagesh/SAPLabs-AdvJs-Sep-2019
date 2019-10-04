const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

// req - IncomingMessage (class) inherits from ReadableStream
// res - ServerResponse (class) inherits from WritableStream

const server = http.createServer((req, res) => {
    console.log(`A new connection is established - ${req.url}`);
    const resource = req.url === '/' ? 'index.html' : req.url,
        urlObj = url.parse(resource),
        resourceName = urlObj.pathname;
    const resourceFullName = path.join(__dirname, resourceName);
    if (!fs.existsSync(resourceFullName)){
        res.statusCode = 404;
        res.end();
        return;
    }
    fs.createReadStream(resourceFullName).pipe(res);
});

server.listen(8080);

server.on('listening', () => console.log('Server listening on 8080!!'));