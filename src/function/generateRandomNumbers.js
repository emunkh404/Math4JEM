const generateRandomNumbers = (type, score) => {
  let result;

  let num1, num2;

  if (score < 8) {
    // Generate random single-digit numbers (excluding 0)
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
  } else {
    // Generate random two-digit numbers (between 10 and 99)
    num1 = Math.floor(Math.random() * 90) + 10;
    num2 = Math.floor(Math.random() * 90) + 10;
  }

  if (type === "+") {
    result = { val1: num1, val2: num2, answer: num1 + num2 };
  } else if (type === "-") {
    if (num1 <= num2) {
      // Ensure num1 is greater than num2
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }
    result = { val1: num1, val2: num2, answer: num1 - num2 };
  } else if (type === "÷") {
    const divisible = num1 * num2;
    result = { val1: divisible, val2: num2, answer: num1 };
  } else if (type === "×") {
    result = { val1: num1, val2: num2, answer: num1 * num2 };
  }

  return result;
};

export default generateRandomNumbers;
