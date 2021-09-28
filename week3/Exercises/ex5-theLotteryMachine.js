function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
 
  // define the smaller number as the first number
  let firstNumber;
  if (startIndex < stopIndex) {
    firstNumber = startIndex;
  } else {
    firstNumber = stopIndex;
  }
  
  // make array
  for (let i = 0; i < (Math.abs(startIndex - stopIndex) + 1); i++) {
    numbers.push(firstNumber);
    firstNumber++;
  }
  console.log(numbers);

  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  numbers.forEach(number => {
    if (number % 3 == 0 && number % 5 == 0) {
      threeCallback(number);
      fiveCallback(number);
    }
    else if (number % 3 == 0) {
      threeCallback(number);
    }
    else if (number % 5 == 0) {
      fiveCallback(number);
    } 
    else {
      console.log(`${number} is not divisible by 3 or 5`);
    }
  })
}

// Callback functions:
function sayThree(num) {
  console.log(`${num} is divisible by 3`)
}

function sayFive(num) {
  console.log(`${num} is divisible by 5`)
}


threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
