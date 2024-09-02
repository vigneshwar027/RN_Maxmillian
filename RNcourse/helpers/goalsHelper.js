const generatedNumbers = new Set();

function generateUniqueNumber() {
  let number;
  do {
    number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);
  return number;
}

export default generateUniqueNumber

// Example usage:
const uniqueNumber = generateUniqueNumber();
console.log(uniqueNumber);