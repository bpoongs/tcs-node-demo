const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const port = 3300;
const app = express();
app.use(express.json()); // included due to the use of req.body

const mongourl = 'mongodb://127.0.0.1:27017/'
let db;
const collectionName = 'product';

app.get('/', (req, res) => {
    res.send("App is running!!");
});

// app.get('/api/products', (req, res) => {
//     db.collection(collectionName).find().toArray((err, result) => {
//         if(err) throw err;
//         else res.send(result);
//     })
// });

// app.get('/api/products/:prodId', (req, res) => {
//     let productId = req.params.prodId;
//     db.collection(collectionName).findOne({"productId" : +productId}, (err, result) => {
//         if(err) throw err;
//         else res.send(result);
//     })
// });

// app.post('/api/products', (req, res) => {
//     db.collection(collectionName).insert(req.body, (err, result) => {
//         if(err) res.send('Error inserting document!!');
//         else res.send({ message : 'Document inserted successfully!!'});
//     })
// });

// app.delete('/api/products/:productId', (req, res) => {
//     let prodId = req.params.productId;
//     db.collection(collectionName).deleteOne({productId : +prodId}, (err, result) => {
//         if(err) res.send('Error deleting document!!');
//         else res.send({ message : 'Document deleted successfully!!'});
//     })
// })

// app.put('/api/products', (req, res) => {
//     db.collection(collectionName).update({productId: +req.body.productId}, {
//         $set: {
//             productId: req.body.productId,
//             productName: req.body.productName,
//             productCost: req.body.productCost,
//             productDescription: req.body.productDescription,
//             productImageUrl: req.body.productImageUrl
//         }
//     },(err, result) => {
//         if(err) res.send('Error updating document!!');
//         else res.send({ message : 'Document updated successfully!!'});  
//     })
// })

MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('productdb');
    app.listen(port, ()=> {
        console.log(`Server running on port ${port}`)
    })
})