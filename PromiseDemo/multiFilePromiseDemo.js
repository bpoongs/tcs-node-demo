const fs = require('fs');
const util = require('util');

//old
fs.readFile('./data1.txt', (error, data1) => {
    fs.readFile('./data2.txt', (error, data2) => {
        fs.readFile('./data3.txt', (error, data3) => {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        })
    })
});

//new
const read = util.promisify(fs.readFile);

Promise
    .all([
        read('./data1.txt'),
        read('./data2.txt'),
        read('./data3.txt')
    ]).then(data => {
        const [data1, data2, data3] = data; // destructuring an array in JS
        console.log(data1.toString());
        console.log(data2.toString());
        console.log(data3.toString());
    }).catch(error => {
        console.log(error);
    });