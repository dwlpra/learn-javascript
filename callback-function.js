
const orderCoffe = () => {
    let coffee = null;
    console.log("preparing coffee...");
    setTimeout(() => {
        coffee = "coffee is ready";
    }, 3000)

    return coffee;
}

const coffee = orderCoffe()

// null because function already retuned before setTimeout finish
console.log(coffee) 

//new line
console.log("\n")

// use callback
const orderCoffe2 = callback => {
    let coffee = null
    console.log("preparing coffee...")
    setTimeout(() => {
        coffee ="coffe is ready"
        callback(coffee)
    }, 3000)
}

orderCoffe2(coffee => {
    console.log(coffee)
})