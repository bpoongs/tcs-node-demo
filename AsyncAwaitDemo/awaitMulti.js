const { reject } = require('async');
const fs = require('fs');
const { resolve } = require('path');
const util = require('util');
const read = util.promisify(fs.readFile);

//old - callback hell
fs.readFile('./data1.txt', (error, data1) => {
    fs.readFile('./data2.txt', (error, data2) => {
        fs.readFile('./data3.txt', (error, data3) => {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        })
    })
});

//using promises
const readPromise = new Promise((resolve, reject) => {
        fs.readFile('./data1.txt', (error, data1) => {
            console.log(data1.toString());
            resolve(data1);
        });
    }).then(value => {
        fs.readFile('./data2.txt', (error, data2) => {
            console.log(data2.toString());
        });
    }).then((value) => {
        fs.readFile('./data3.txt', (error, data3) => {
            console.log(data3.toString());
        }); 
});

//using promises - promisify

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

//using async/await
const readFile = async () => {
    const data1 = await read('./data1.txt');
    console.log(data1.toString());

    const data2 = await read('./data2.txt');
    console.log(data2.toString());

    const data3 = await read('./data3.txt');
    console.log(data3.toString());
}
readFile();