const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); // included due to use of req.body

var allProducts;

// read the contents of the products.json file and store it in allProducts variable
fs.readFile('./products.json', (error, data) => {
    if(error){
        console.log('Error reading file!');
    }
    else{
        this.allProducts = JSON.parse(data);
    }
})

// route to get all products 
app.get('/api/products', (req, res) => {
    res.send(this.allProducts);
});

//route to get a particular product by product Id
app.get('/api/products/:prodId', (req, res) => {
    let prodId = req.params.prodId;
    let product = this.allProducts.find((prod) => prod.id == prodId);
    res.send(product);
});

//route to delete a particular product by product Id
app.delete('/api/products/:prodId', (req, res) => {
    let prodId = req.params.prodId;
    let prodIndex = this.allProducts.findIndex((prod) => prod.id == prodId);
    if(prodIndex == -1) res.status(400).send('No Id found!!');
    this.allProducts.splice(prodIndex, 1);
    
    fs.writeFile('./products.json', JSON.stringify(this.allProducts), (error) => {
        if(error){
            console.log('Error writing file!');
        }
        else{
            res.send(this.allProducts);
        }
    })
});

// insert a new product json object
app.post('/api/products', (req, res) => {
    let product = req.body;
    this.allProducts.push(product);

    fs.writeFile('./products.json', JSON.stringify(this.allProducts), (error) => {
        if(error){
            console.log('Error writing file!');
        }
        else{
            res.send(this.allProducts);
        }
    })
    
});

// update an existing product json object
app.put('/api/products', (req, res) => {
    let product = req.body;
    let prodIndex = this.allProducts.findIndex((prod) => prod.id == product.id);
    if(prodIndex == -1) res.status(400).send('No Id found!!');
    this.allProducts[prodIndex] = product;
    fs.writeFile('./products.json', JSON.stringify(this.allProducts), (error) => {
        if(error){
            console.log('Error writing file!');
        }
        else{
            res.send(this.allProducts);
        }
    })
});

app.listen(5000, () => {
    console.log('Listening on port 5000...');
})