function doubleEvenNumbers(numbers) {
  const newNumbers = numbers.filter(num => num % 2 === 0)
                            .map(num => num * 2);
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console