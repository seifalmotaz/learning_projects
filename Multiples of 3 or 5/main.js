 args = process.argv[2];
let listOfNumbers = [];

 for (let index = 1; index < args; index++) {
    if (index % 3 == 0) listOfNumbers.push(index);
    if (index % 5 == 0) listOfNumbers.push(index);
    
 }

 console.log(listOfNumbers.reduce((a, b) => a + b, 0));