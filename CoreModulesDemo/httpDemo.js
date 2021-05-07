const http = require('http');

const server = http.createServer((req, res) => { 
    if(req.url === '/'){
        console.log('For Console: Hello World!')
        res.write('For Browser: Hello World!')     
        res.end();
    }
    if(req.url === '/api/courses'){
        console.log('For Console: api/courses accessed!')
        res.write(JSON.stringify([1, 2, 3]));
        res.end(); 
    }
 });

server.listen(3000);

console.log('Listening on port 3000.....');