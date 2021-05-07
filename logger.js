
var url = 'http://mysite.in/hello';

function log(msg){
    // accessing the url here
    console.log('Hello :' + msg);
}

//module.exports.log = log;
//module.exports.endPoint = url;

module.exports = log;

console.log(module);