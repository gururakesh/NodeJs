var obj = { a: 1, 
            b : 2, 
            c: 3 };

console.log("\nfor...in loop on an object:");
for (var key in obj) {
    console.log(`${key} --> ${obj[key]}`);
}

console.log("\ntraditional for loop on an object:");
for (var key in Object.keys(obj)) {
    console.log(`${key} --> ${obj[key]}`);
}

console.log("\nfor...of for simple object:");
try {
    for (var value of obj) {
        console.log(value);
    }
} catch (e) {
    console.log("This object is not iterable, so you can't use for...of");
}


