const fs = require('fs');

//fs.unlinkSync('./hello.txt');

// fs.unlink('./hello.txt', (error) => {
//     if(error){
//         console.log('Error deleting the file asynchronously!!');
//     }
//     else{
//         console.log('File removed successfully!!');
//     }
// });

// console.log('the file was removed...');


//fs.writeFileSync('./hello.txt', 'this is a content written synchronously!');

// fs.writeFile('./hello.txt', 'this is writern asynchrously!!', (error) =>{
//     if(error){
//         console.log('Error writing asynchrously to the file!!');
//     }
//     else{
//         console.log('content written aysnchronously to the file!!');
//     }
// });

// console.log("after writing to the file!");

// fs.appendFile('./hello.txt', 'this is writern asynchrously!!', (error) =>{
//     if(error){
//         console.log('Error appendig asynchrously to the file!!');
//     }
//     else{
//         console.log('content appended aysnchronously to the file!!');
//     }
// });

// console.log("after appending to the file!");


// var data = fs.readFileSync('./hello.txt')
// //console.log(data);
// console.log(data.toString());

fs.readFile('./hello.txt', (error, data) =>{
    if(error){
        console.log('Error reading from file asynchronously!!');
    }
    else{
        console.log(data.toString());
    }
});

