function processArray(numbers) {
    const manipulatedArray = numbers.map((num) => {
        if (num % 2 === 0) {
            return num **2;
        } else {
            return num *3;
        }
    });
    return manipulatedArray;

}

function formatArrayStrings(strings, numbers) {
    const formattedArray = strings.map((str, index) => {
        if (numbers[index] % 2 === 0){
            return str.toUpperCase();
        }else{
            return str.toLowerCase();
        }
    });
    return formattedArray;
}

//Test example
const strings = ["Hello", "World", "HappyHacking"];
const numbers = [6, 7, 8, 9, 10];
const processedNumbers = processArray(numbers);
console.log(formatArrayStrings(strings, processedNumbers));