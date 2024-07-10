// Generic Functions Example
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let output3 = loggingIdentity<number>([1, 2, 3]);
console.log(output3); // [1, 2, 3]