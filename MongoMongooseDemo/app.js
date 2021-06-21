const express = require('express');
const mongoose = require('mongoose');
//const MongoClient = require('mongodb').MongoClient;

const product = require('./models/productModel');

const port = 3300;
const app = express();
app.use(express.json()); // included due to the use of req.body

const db = mongoose.connect('mongodb://127.0.0.1:27017/productDB');

//const mongourl = 'mongodb://127.0.0.1:27017/'
//let db;
//const collectionName = 'product';

app.get('/', (req, res) => {
    res.send("App is running!!");
});

app.get('/api/products', (req, res) => {
    //db.collection(collectionName).find().toArray((err, result) => {
    product.find((err, result) => {
        if(err) throw err;
        else res.send(result);
    })
});

app.get('/api/products/:prodId', (req, res) => {
    let productId = req.params.prodId;
    //db.collection(collectionName).findOne({"id" : +productId}, (err, result) => {
    product.findById(productId, (err, result) => {
        if(err) throw err;
        else res.send(result);
    })
});

app.post('/api/products', (req, res) => {
    //db.collection(collectionName).insert(req.body, (err, result) => {
    product.create(req.body, (err, result) => {
        if(err) res.send('Error inserting document!!');
        else res.send({ message : 'Document inserted successfully!!'});
    })
});

app.delete('/api/products/:productId', (req, res) => {
    let prodId = req.params.productId;
    //db.collection(collectionName).deleteOne({id : +prodId}, (err, result) => {
    product.findOneAndDelete({"id" : +prodId}, (err, result) => {
        if(err) res.send('Error deleting document!!');
        else res.send({ message : 'Document deleted successfully!!'});
    })
})

app.put('/api/products', (req, res) => {
    //db.collection(collectionName).update({id: +req.body.id}, {
    product.findOneAndUpdate({"id": +req.body.id}, {
        $set: {
            id: req.body.id,
            productName: req.body.productName,
            productCost: req.body.productCost,
            productDescription: req.body.productDescription,
            productImageUrl: req.body.productImageUrl
        }
    },(err, result) => {
        if(err) res.send('Error updating document!!');
        else res.send({ message : 'Document updated successfully!!'});  
    })
})

// MongoClient.connect(mongourl,(err,client) => {
//     if(err) throw err;
//     db = client.db('productdb');
    app.listen(port, ()=> {
        console.log(`Server running on port ${port}`)
    })
//})