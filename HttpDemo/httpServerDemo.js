const http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('Hello Http Server!');
        res.end();
    }
    if(req.url == '/api/employees'){
        res.write('[1, 2, 3]');
        res.end();
    }
});

server.listen(4000, () => {
    console.log('Listening on port 4000...');
})