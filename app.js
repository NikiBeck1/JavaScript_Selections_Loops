// Exercise 1 - Ignore Even

// For Loop
for (let a = 1; a <= 100; a++)
    if (a % 2 !== 0) {
        console.log(a);
    } else {
        continue;
    }

// ----------------------------------------------------------------

// Exercise 2 Section - FIZZBUZZ
let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let a = 1; a <= 100; a++)
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (a % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    } else if (a % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);

let b = 1;

while (b <= 100) {
    if (b % 3 === 0 && b % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (b % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    } else if (b % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }
    b++;
}

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);

// ----------------------------------------------------------------

// Exercise 3 Section

// Part 1 - Redoing exercise 1 with while and do-while loop

// While Loop
let c = 1;
while (c <= 100) {
        if (c % 2 !== 0) {
            console.log(c);
        }
        c++;
    }

// Do-While Loop
let d = 1;
do {
    if (d % 2 !== 0) {
        console.log(d);
    }
    d++;
} while (d <= 100);

// Part 2 - Redoing exercise 2 with while and do-while loop

// While Loop
let e = 1;
while (e <= 100) {
    if (e % 3 === 0 && e % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    } else if (e % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    } else if (e % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }
    e++;
}   

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);

// Do-While Loop
let f = 1;
do {
    if (f % 3 === 0 && f % 5 === 0) {
        console.log("FIZZBUZZ");
        fizzBuzzCount++;
    }   else if (f % 5 === 0) {
        console.log("BUZZ");
        buzzCount++;
    }   else if (f % 3 === 0) {
        console.log("FIZZ");
        fizzCount++;
    }
    f++;
} while (f <= 100);

console.log(`FIZZ was printed ${fizzCount} times`);
console.log(`BUZZ was printed ${buzzCount} times`);
console.log(`FIZZBUZZ was printed ${fizzBuzzCount} times`);

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


