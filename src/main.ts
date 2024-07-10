const outputConsole: HTMLUListElement = document.getElementById("output") as HTMLUListElement;

function displayOutput(parameter: any) {
    outputConsole.innerHTML = parameter.toString() ?? "ERROR";
}

// Basic Generics Example
function generifFunction<T>(arg: T): T {
    return arg;
}

// displayOutput(generifFunction<string>("myString"));
// displayOutput(generifFunction<number>(100).toString());


// Generic Classes Example

/*
class GenericNum<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

let myGenericNum = new GenericNum<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // 15

displayOutput(myGenericNumber.add(5, 10));

*/

// Constraint

/*

interface LengthConstraint {
    length: number;
}

function logLength<T extends LengthConstraint>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

displayOutput(logLength({ length: 10, value: 3 }));
displayOutput(logLength("Hello World"));
displayOutput(logLength(["apple"]));

*/
