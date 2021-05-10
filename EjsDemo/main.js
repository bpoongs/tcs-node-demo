const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //read the file
    //fs.readFile(......)
    
    res.render('pages/main', {data: { userName: 'John'}});  // render takes 2 arguments
});

app.listen(4400, () => console.log('Listening on port 4400!'));