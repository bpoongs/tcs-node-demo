const fs = require('fs');

var product = {
    id: 101,
    productName: 'Chips',
    productCost: 2,
    productDescription: 'Crispy Chips!',
    productImageUrl: ''
}

fs.writeFile('./JsonFileDemo/product.json', JSON.stringify(product), (error) => {
    if(error){
        console.log('Error writing in file!');
    }
    else{
        console.log('Data written!');
    }
})