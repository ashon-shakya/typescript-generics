// Basic Generics Example
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1); // myString
console.log(output2); // 100