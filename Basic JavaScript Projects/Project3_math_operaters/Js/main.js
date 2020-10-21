function addition_Function() {//Function for addition
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 =" + addition;
}

function subtraction_Function() {//Function for subtraction
    var subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 =" + subtraction;
}

function multiplication() {//Creating a function for multiplication
    var simple_Math = 6 * 8;
    document.getElementById("math").innerHTML = "6 x 8 =" + simple_Math;
}

function division() {//Creating a function for division
    var simple_Math = 48 / 6;
    document.getElementById("demo").innerHTML = "48 / 6 =" + simple_Math;
}

function more_Math() {//Creating a function with many math elements
    var simple_Math = (1 + 2) * 10 / 2-5;
    document.getElementById("memo").innerHTML = "1 plus 2, mutiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("bemo").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {//A function for unary operations
    var x = 10;
    document.getElementById("aemo").innerHTML = -x;
}

function increment() {
    var X = 11
    X++;
    document.getElementById("femo").innerHTML = X;
}

function decrement() {
    var X = 5.25;
    X--;
    document.getElementById("gemo").innerHTML = X;
}

function randomnumber_Function() {
    window.alert(Math.random());
    document.getElementById("hemo").innerHTML = window.alert;
}

function numbergenerator_Function() {
    window.alert(Math.random() * 100);
    document.getElementById("jemo").innerHTML = window.alert;
}

function math_model_Function() {
    var X = Math.pow(8, 2);
    document.getElementById("lemo").innerHTML = "8 multiplied by the power of 2 = " + X;
}