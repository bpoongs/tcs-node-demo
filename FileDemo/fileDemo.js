const fs = require('fs');

// synchronous way of deleting a file
//fs.unlinkSync('./hello.txt');

// asynchronous way of deleting the file
// fs.unlink('./hello.txt', (error) => {
//     if(error){
//         console.log('Error deleting the file asynchronously!!');
//     }
//     else{
//         console.log('File removed successfully!!');
//     }
// });
// console.log("after deleting the file asynchronously!!")

// synchronous way of writing to a file
// fs.writeFileSync('./hello.txt', 'this is a content written synchronously!');
// console.log("content writtern to the file synchronously");

// asynchronous way of writing to a file
// fs.writeFile('./hello.txt', 'this is writern asynchrously!!', (error) =>{
//     if(error){
//         console.log('Error writing asynchrously to the file!!');
//     }
//     else{
//         console.log('content written aysnchronously to the file!!');
//     }
// });
// console.log("after writing to a file");

// asynchronous way of appending content to a file
// fs.appendFile('./hello.txt', 'this is writern asynchrously!!', (error) =>{
//     if(error){
//         console.log('Error appendig asynchrously to the file!!');
//     }
//     else{
//         console.log('content appended aysnchronously to the file!!');
//     }
// });
// console.log("after appending to the file!");

// synchronous way of reading from a file
// var data = fs.readFileSync('./hello.txt')
// console.log(data);
// console.log(data.toString());

// asynchronous way of reading from a file
fs.readFile('./hello.txt', (error, data) =>{
    if(error){
        console.log('Error reading from file asynchronously!!');
    }
    else{
        console.log(data.toString());
    }
});
console.log("after reading from the file asynchronously!!");
