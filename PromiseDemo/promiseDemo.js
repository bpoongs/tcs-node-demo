const promise = new Promise((resolve, reject) => {
    //resolve('GOOD');
    reject('BAD');
}).then(value => {
    console.log(value); // prints GOOD
    return 1;
}).then(value => {
    console.log(value); // prints 1
    return 2;
}).then(value => {
    console.log(value); // prints 2
    return 3;
}).then(value => {
    console.log(value); //prints 3
    return 4;
}).catch(error => {
    console.log(error);
})