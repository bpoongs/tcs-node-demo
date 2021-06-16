console.log('Your module is accessed now...');

var myDateTime = () => {
    return new Date();
}

//module.exports = myDateTime;

module.exports.myDateTime = myDateTime;
//module.exports.<different name> = <different name>
console.log(module);