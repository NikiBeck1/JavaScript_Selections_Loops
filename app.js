// Exercise 1 Section

for (let i = 1; i <= 100; i++)
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }

while (i <= 100) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }


// Exercise 2 Section - FIZZBUZZ
let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let i = 1; i <= 100; i++)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (i % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    } else if (i % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);


while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (i % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    } else if (i % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }
    i++;
}

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);



// Exercise 3 Section - Table of Powers
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

/* 
Create a for loop that iterates from 0 to n
If your current iteration is equal to value, then print "Found value!", and break out of the loop
If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"
*/

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        break;
    }
    if (i === n) {
        console.log("Did not find value");
    }
}

console.log(`The value to find is ${value}`);


// Exercise 4 Section 

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000


/* 
Re-implement exercise 2, but use start as the initial value for i, 
end as the range limit in i <= end, and fizzDivisor and buzzDivisor 
as the dependent values for determining "FIZZ" and "BUZZ" print messages.
*/

let fizzCount2 = 0;
let buzzCount2 = 0;
let fizzBuzzCount2 = 0;

for (let i = start; i <= end; i++)
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount2++;
    } else if (i % buzzDivisor === 0) {
        console.log("BUZZ");
        buzzCount2++;
    } else if (i % fizzDivisor === 0) {
        console.log("FIZZ");
        fizzCount2++;
    }