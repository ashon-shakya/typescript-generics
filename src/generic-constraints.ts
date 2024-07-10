// Constraints in Generics Example

interface Lengthwise {
    length: number;
}

function loggingLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingLength({ length: 10, value: 3 });
loggingLength("Hello World");