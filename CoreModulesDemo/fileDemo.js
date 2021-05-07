const fs = require('fs');

// delete a file synchronously.
//fs.unlinkSync('./hello.txt');

// delete a file asynchronously.
// fs.unlink('./hello.txt', (error) => {
//     if(error){
//         console.log('errror in deleting!');
//     } else {
//         console.log('just deleted the file!');
//     }
// });
// console.log('after deleteing the file!');

//write to a file synchronously.
//fs.writeFileSync('./hello.txt', 'This text is written.');

//write to a file asynchronously.
// fs.writeFile('./hello.txt', 'This text is written asynchronously.', (error) => {
//     if(error){
//         console.log('errror in writing!');
//     } else {
//         console.log('just written to the file!');
//     }
// });
// console.log('After writing to the file!');

//append to a file synchronously.
//fs.appendFileSync('./hello.txt', 'This text is appended.');

//append to a file asynchronously.
// fs.appendFile('./hello.txt', 'This text is appended asynchronously.', (error) => {
//     if(error){
//         console.log('errror in appending!');
//     } else {
//         console.log('just appended to the file!');
//     }
// });
// console.log('After appending to the file!');

//append to a file synchronously.
// var data = fs.readFileSync('./hello.txt');
// console.log(data.toString());

//append to a file asynchronously.
// fs.readFile('./hello.txt', (error, data) => {
//     if(error){
//         console.log('errror in reading!');
//     } else {
//         console.log(data.toString());
//     }
// });
// console.log('After reading the file!');
