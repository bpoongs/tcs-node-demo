const express = require('express');
let router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const mongourl = 'mongodb://127.0.0.1:27017/'
let db;
const collectionName = 'product';

// app is replaced with router
// remove /api from the route
router
    .route('/products')
    .get((req, res) => {
        db.collection(collectionName).find().toArray((err, result) => {
            if(err) throw err;
            else res.send(result);
        })  
    })
    .post((req, res) => {
        db.collection(collectionName).insert(req.body, (err, result) => {
            if(err) res.send('Error inserting document!!');
            else res.send({ message : 'Document inserted successfully!!'});
        })
    })
    .put((req, res) => {
        db.collection(collectionName).update({productId: +req.body.productId}, {
            $set: {
                productId: req.body.productId,
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

router
    .route('/products/:prodId')
    .get((req, res) => {
        let productId = req.params.prodId;
        db.collection(collectionName).findOne({"productId" : +productId}, (err, result) => {
            if(err) throw err;
            else res.send(result);
        })
    })
    .delete((req, res) => {
        let prodId = req.params.prodId;
        db.collection(collectionName).deleteOne({productId : +prodId}, (err, result) => {
            if(err) res.send('Error deleting document!!');
            else res.send({ message : 'Document deleted successfully!!'});
        })
    });

MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('productdb');
});

module.exports = router;