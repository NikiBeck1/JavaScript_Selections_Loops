// Exercise 1 - Ignore Even

// For Loop
for (let a = 1; a <= 100; a++)
    if (a % 2 !== 0) {
        console.log(a);
    } else {
        continue;
    }



// Exercise 2 Section - FIZZBUZZ
let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (a % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    } else if (a % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    }
}
console.log("Exercise 2 Results:");
console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);



// Exercise 3 Section

// Part 1 - Redoing exercise 1 with while and do-while loop

// While Loop
let b = 1;
while (b <= 100) {
        if (b % 2 !== 0) {
            console.log(b);
        }
        b++;
    }

// Do-While Loop
let c = 1;
do {
    if (c % 2 !== 0) {
        console.log(c);
    }
    c++;
} while (c <= 100);

// Part 2 - Redoing exercise 2 with while and do-while loop

// While Loop
let secondFizzCount = 0;
let secondBuzzCount = 0;
let secondFizzBuzzCount = 0;
let d = 1;
while (d <= 100) {
    if (d % 3 === 0 && d % 5 === 0) {
        console.log("FIZZBUZZ");
        secondFizzBuzzCount++;
    } else if (d % 5 === 0) {
        console.log("BUZZ");
        secondBuzzCount++;
    } else if (d % 3 === 0) {
        console.log("FIZZ");
        secondFizzCount++;
    }
    d++;
}   
console.log("Exercise 3 - While Loop Results:");
console.log(`FIZZ was printed ${secondFizzCount} times`);
console.log(`BUZZ was printed ${secondBuzzCount} times`);
console.log(`FIZZBUZZ was printed ${secondFizzBuzzCount} times`);

// Do-While Loop
let thirdFizzCount = 0;
let thirdBuzzCount = 0;
let thirdFizzBuzzCount = 0;
let e = 1;
do {
    if (e % 3 === 0 && e % 5 === 0) {
        console.log("FIZZBUZZ");
        thirdFizzBuzzCount++;
    }   else if (e % 5 === 0) {
        console.log("BUZZ");
        thirdBuzzCount++;
    }   else if (e % 3 === 0) {
        console.log("FIZZ");
        thirdFizzCount++;
    }
    e++;
} while (e <= 100);

console.log("Exercise 3 - Do / While Results:");
console.log(`FIZZ was printed ${thirdFizzCount} times`);
console.log(`BUZZ was printed ${thirdBuzzCount} times`);
console.log(`FIZZBUZZ was printed ${thirdFizzBuzzCount} times`);

// ----------------------------------------------------------------



// Exercise 4 Section - Find Value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

/* 
Create a for loop that iterates from 0 to n
If your current iteration is equal to value, then print "Found value!", and break out of the loop
If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"
*/
let found = false;
for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}
if (!found) {
    console.log("Did not find value");
}

console.log(`The value to find is ${value}`);




// Exercise 5 Section 


/* 
Re-implement exercise 2, but use start as the initial value for i, 
end as the range limit in i <= end, and fizzDivisor and buzzDivisor 
as the dependent values for determining "FIZZ" and "BUZZ" print messages.
*/

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000


let fourthFizzCount = 0;
let fourthBuzzCount = 0;
let fourthFizzBuzzCount = 0;

for (let f = start; f <= end; f++)
    if (f % fizzDivisor === 0 && f % buzzDivisor === 0) {
        console.log("FIZZBUZZ");
        fourthFizzBuzzCount++;
    } else if (f % buzzDivisor === 0) {
        console.log("BUZZ");
        fourthBuzzCount++;
    } else if (f % fizzDivisor === 0) {
        console.log("FIZZ");
        fourthFizzCount++;
    }


console.log("Exercise 5 Results:");
console.log(`FIZZ was printed ${fourthFizzCount} times`);
console.log(`BUZZ was printed ${fourthBuzzCount} times`);
console.log(`FIZZBUZZ was printed ${fourthFizzBuzzCount} times`);