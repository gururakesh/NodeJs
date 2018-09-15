var car1 = [];
var car2 = new Array();
var car3 = new Array(10);
var car4 = new Array(4, 34, 6, 8, 525, 8693, 281, 88, 28, 95, 346);

console.log("Creating the arrray var car1 = []");
console.log(car1);
console.log("Creating the arrray var car2 = new Array()");
console.log(car2);
console.log("Creating the arrray var car3 = new Array(10)");
console.log(car3);
console.log("Creating the arrray var car4 = new Array(4, 34, 6, 8, 525, 8693, 281, 88, 28, 95, 346)");
console.log(car4);
console.log(Array.isArray(car4));

var x = [ 1, 2, 3, 4, 5, 6, 7 ];

console.log("\ntraditional for loop on an array:");
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// for...in loop does NOT guarantee order!!
console.log("\nfor...in on an array:");
for (var idx in x) {
    console.log(x[idx]);
}

console.log("\nfor...of loop on an array:");
for (var value of x) {
    console.log(value);
}
