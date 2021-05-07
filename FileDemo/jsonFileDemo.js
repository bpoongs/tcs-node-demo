const fs = require('fs');

var product = {
    id: 101,
    productName: 'Chips',
    productCost: 2,
    productDescription: 'Crispy chips!',
    productImageUrl: ''
};

// convert JS object to JSON - JSON.stringify()
// convert JSON to JS object - JSON.parse()

// fs.writeFile('./product.json', JSON.stringify(product), (error) => {
//     if(error){
//         console.log("Error writing to the file!!");
//     }
//     else{
//         console.log("Product writtern successfully!!");
//     }
// });

fs.readFile('./product.json', (error, data) => {
    if(error){
        console.log('Error reading file!!');
    }else{
        console.log(JSON.parse(data.toString()));
    }
});