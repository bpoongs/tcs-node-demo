const http = require('http');

const server = http.createServer((req, res) => { 
    if(req.url === '/'){
        console.log('For Console: Hello World!')
        res.write('For Browser: Hello World!')     
        res.end();
    }
 });

server.listen(3000, () => {
    console.log('Listening on port 3000.....');
});

//server.listen(3000);
//console.log('Listening on port 3000.....');
// any lines of code here it will continue executing

