const path = require('path');

var myPath="D:\\node-tcs-programs\\hello.txt"

console.log("Base name : " + path.basename(myPath));
console.log("Dir name : " + path.dirname(myPath));
console.log("Ext name : " + path.extname(myPath));
console.log("isAbsolute : " + path.isAbsolute(myPath));