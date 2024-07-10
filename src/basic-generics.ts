// Basic Generics Example
function biodata<T>(arg: T): T {
    return arg;
}

let output1 = biodata<string>("myString");
let output2 = biodata<number>(100);

console.log(output1); // myString
console.log(output2); // 100