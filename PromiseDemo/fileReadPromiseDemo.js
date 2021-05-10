const fs = require('fs');
const util = require('util');

//old
fs.readFile('./hello.txt', (error, data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log('Without Promises :' + data.toString());
    }
})

//new
const promise = new Promise((resolve, reject) => {
    fs.readFile('./hello.txt', (error, data) => {
        if(error){
            reject(error);
        }
        else{
            resolve(data.toString());
        }
    })
}).then(value => {
    console.log('Using promises:' + value);
}).catch(error => {
    console.log(error);
})

//better
const read = util.promisify(fs.readFile);
read('./hello.txt')
    .then(value => {
        console.log(value.toString());
    }).catch(error => {
        console.log(error);
    })