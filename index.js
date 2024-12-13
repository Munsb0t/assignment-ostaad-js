// 1) Calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2) Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3) Find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Sort an array in descending order
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 6) Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Find the average of all elements in an array
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// 8) Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function Calls to display output
console.log("1) calculateDifference:", calculateDifference(10, 5)); // 5
console.log("2) isOdd (3):", isOdd(3)); // true
console.log("2) isOdd (4):", isOdd(4)); // false
console.log("3) findMin:", findMin([5, 2, 9, 1])); // 1
console.log("4) filterEvenNumbers:", filterEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log("5) sortArrayDescending:", sortArrayDescending([1, 4, 2, 5])); // [5, 4, 2, 1]
console.log("6) lowercaseFirstLetter ('Hello'):", lowercaseFirstLetter("Hello")); // "hello"
console.log("6) lowercaseFirstLetter (''):", lowercaseFirstLetter("")); // ""
console.log("7) findAverage ([10, 20, 30]):", findAverage([10, 20, 30])); // 20
console.log("7) findAverage ([]):", findAverage([])); // 0
console.log("8) isLeapYear (2020):", isLeapYear(2020)); // true
console.log("8) isLeapYear (1900):", isLeapYear(1900)); // false
console.log("8) isLeapYear (2000):", isLeapYear(2000)); // true
