
// error becauce we need resolver function (executor function)
// resolver will be running when constructor promise called

// let coffee = new Promise();


//example resolver
let promise = (resolve, reject) => {
    const isCoffeeMakerReady = true; // change true to false to make promise rejected
    if(isCoffeeMakerReady) {
        resolve("make coffee finished")
    }else {
        reject("failed make a coffe")
    }
}

const makeCoffee = () => {
    return new Promise(promise);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise)

