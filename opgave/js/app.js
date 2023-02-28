// Deklarer fruits arrayet
let fruits = ["apple", "banana", "cherry", "durian", "elderberry"];
// console.log(fruits);
// Brug en for-in løkke til at udskrive indekset for hvert element i fruits arrayet.
for(let index in fruits){
    console.log(`${index}`);
};

// Brug en for-of-løkke til at udskrive hvert element i fruits arrayet.
for(let i in fruits){
    console.log(fruits[i]);
};

// Deklarer person objektet
let person = {
    name: "John", 
    age: 30, 
    gender: "male", 
    occupation: "teacher"
};
// Brug en for-in løkke til at udskrive nøglen og værdien for hver egenskab i person objektet.
for(let property in person){
    console.log(`personens ${property} er ${person[property]}`);
};