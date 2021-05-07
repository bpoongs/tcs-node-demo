const fs = require('fs');

fs.readFile('./JsonFileDemo/product.json',(error, data) =>{
    if(error){
        console.log('Error reading file!!');
    }
    else{
        console.log(JSON.parse(data));
    }
});
