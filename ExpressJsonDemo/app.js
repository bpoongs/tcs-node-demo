const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); // included due to use of req.body

let allProducts = [
    {
        id: 101,
        productName: "Chips",
        productCost: 2,
        productDescription: "Crispy Chips!",
        productImageUrl: ""
    },
    {
        id: 102,
        productName: "Cookies",
        productCost: 3,
        productDescription: "Delicious Cookies!!",
        productImageUrl: ""
    }
]

app.get('/api/products', (req, res) => {
    res.send(allProducts);
});

app.get('/api/products/:prodId', (req, res) => {
    let prodId = req.params.prodId;
    let product = allProducts.find((prod) => prod.id == prodId);
    res.send(product);
});

app.delete('/api/products/:prodId', (req, res) => {
    let prodId = req.params.prodId;
    let prodIndex = allProducts.findIndex((prod) => prod.id == prodId);
    if(prodIndex == -1) res.status(400).send('No Id found!!');
    allProducts.splice(prodIndex, 1);
    res.send(allProducts);
});

app.post('/api/products', (req, res) => {
    let product = req.body;
    allProducts.push(product);
    res.send(allProducts);
});

app.put('/api/products', (req, res) => {
    let product = req.body;
    let prodIndex = allProducts.findIndex((prod) => prod.id == product.id);
    if(prodIndex == -1) res.status(400).send('No Id found!!');
    allProducts[prodIndex] = product;
    res.send(allProducts);
});

app.listen(5000, () => {
    console.log('Listening on port 5000...');
})