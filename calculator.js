var readLineSync = require('readline-sync');
var firstName = readLineSync.questionInt("Please enter your first number: ");
var secondName = readLineSync.questionInt("Please enter your ssecond number: ");
var enteredOperator = readLineSync.question("please enter the operation to perform (add, sub, mul, div): ");

function addTwoNumber(num1, num2){
    return (num1 + num2);
}

function subtractTwoNumber(num1, num2){
    return (num1 - num2);
}

function multiplyTwoNumber(num1, num2){
    return (num1 * num2);
}

function divideTwoNumber(num1, num2){
    return (num1 / num2);
}

function calculator(userNumber1, userNumber2, userOperator){
    if (userOperator == "add"){
        
        console.log("The result is: " + addTwoNumber(userNumber1, userNumber2));
    } else if (userOperator == "sub"){
        console.log("The result is: " + subtractTwoNumber(userNumber1, userNumber2))

    } else if (userOperator == "mul"){
        console.log("The result is: " + multiplyTwoNumber(userNumber1, userNumber2))

    } else if (userOperator == "div"){
        console.log("The result is: " + divideTwoNumber(userNumber1, userNumber2))
        
    } else{
        console.log("Invalid Operation!  Please try again.");
    }
} 

calculator(firstName, secondName, enteredOperator);












    