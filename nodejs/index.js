var http = require('http');

http.createServer(function (req, res) {
    if(req.url === '/api/articles') {   
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify([
            { id: 1, title: 'Article 1' },
            { id: 2, title: 'Article 2' },
            { id: 2, title: 'Article 3' }
        ]));
        return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);