const fs = require('fs');

//write to a file synchronously.
fs.writeFileSync('./hello.txt', 'This text is written.');
console.log("text writtern to file....");
