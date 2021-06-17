var fizzBuzz = [];

for (var i = 0; i <= 20; i++) {
    if (i === 0) continue;
    else if (i % 15 === 0) fizzBuzz.push("fizzbuzz");
    else if (i % 3 === 0) fizzBuzz.push("fizz");
    else if (i % 5 === 0) fizzBuzz.push("buzz");
}

console.log(fizzBuzz, fizzBuzz.length);