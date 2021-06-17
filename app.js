var fizzBuzz = [];

for (var i = 1; i <= 20; i++) {
    if (i % 15 === 0) fizzBuzz.push("fizzbuzz");
    else if (i % 3 === 0) fizzBuzz.push("fizz");
    else if (i % 5 === 0) fizzBuzz.push("buzz");
}

console.log(fizzBuzz, fizzBuzz.length);