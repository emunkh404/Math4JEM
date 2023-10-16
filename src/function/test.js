import {generateRandomNumbers} from './generateRandomNumbers';

// Test case 1: Generate random addition problem with single digits
console.log(generateRandomNumbers("add", 5));

// Test case 2: Generate random subtraction problem with single digits
console.log(generateRandomNumbers("subtract", 5));

// Test case 3: Generate random division problem with single digits
console.log(generateRandomNumbers("divide", 5));

// Test case 4: Generate random multiplication problem with single digits
console.log(generateRandomNumbers("multiply", 5));

// Test case 5: Generate random addition problem with more than 7 digits
console.log(generateRandomNumbers("add", 8));

// Test case 6: Generate random subtraction problem with more than 7 digits
console.log(generateRandomNumbers("subtract", 8));

// Test case 7: Generate random division problem with more than 7 digits
console.log(generateRandomNumbers("divide", 8));

// Test case 8: Generate random multiplication problem with more than 7 digits
console.log(generateRandomNumbers("multiply", 8));
