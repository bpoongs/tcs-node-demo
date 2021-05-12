const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const products = require('./routes/products');

const port = 3300;
const app = express();
app.use(express.json()); // included due to the use of req.body
app.use('/api', products); // use products.js to handle endpoints that begin with /api

// const mongourl = 'mongodb://127.0.0.1:27017/'
// let db;
// const collectionName = 'product';

app.get('/', (req, res) => {
    res.send("App is running!!");
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});