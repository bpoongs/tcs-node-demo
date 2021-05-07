const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h5>Welcome to Express Js!!</h5>');
})

server.listen(3000, (error) => {
    if(error){
        console.log('Error listening on port 3000!!');
    }
    else{
        console.log('Listening on port 3000!!');
    }
})