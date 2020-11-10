const numA = `Enter any number 😀`;
const actualNumA = parseInt(numA);

const numB = `Enter any number 😎`;
const actualNumB = parseInt(numB);

const add = actualNumA + actualNumB;
console.log(add);

const sub = actualNumA - actualNumB;
console.log(sub);

const mul = actualNumA * actualNumB;
console.log(mul);

const div = actualNumA / actualNumB;
console.log(div);


const expo = Math.pow(actualNumA, actualNumB)
console.log(expo);



const modul = actualNumA % actualNumB;
console.log(modul);
// end of task1

// random num 1 - 35
const randomNum = Math.floor((Math.random() * 35) + 1);
console.log(randomNum)

// floating point number rounded down

const floatA = `Enter any number 😀`;
const actualFloatA = parseInt(floatA);
const floatNum = Math.floor (Math.random() * actualFloatA ) + 1;
console.log(floatNum);