const http = require('http'),
    url = require('url'),
    chalk = require('chalk'),
    querystring = require('querystring'),
    calculator = require('./calculator');

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url),
        queryData = querystring.parse(urlObj.query);
    console.log(chalk.blue(req.url));
    if (urlObj.pathname !== '/calculator'){
        res.statusCode = 404;
        res.end();
        return;
    }
    const { op, x, y } = queryData;
    const result = calculator[op](parseInt(x), parseInt(y));
    res.write(result.toString());
    res.end();
});

server.listen(9090);
server.on('listening', () => console.log('app server listening on 9090'));