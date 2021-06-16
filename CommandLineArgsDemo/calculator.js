var a = parseInt(process.argv[2]);
var b = process.argv[3];
var c = parseInt(process.argv[4]);

// argv[0] = node
// argv[1] = calculator.js
// argv[2] = 6
// argv[3] = -
// argv[4] = 2

if(b == '+'){
    console.log(a + c);
}
else if(b == "-"){
    console.log(a - c);
}
else if(b == "*"){
    console.log(a * c);
}
else if(b == "/"){
    console.log(a / c);
}