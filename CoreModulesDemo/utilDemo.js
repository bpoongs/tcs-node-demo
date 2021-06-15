var util = require('util');

var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'John', 11);
console.log(result);