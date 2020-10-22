function type_of_Function() {
    document.write(typeof "Word");
    document.getElementById("memo").innerHTML = document.write;
}

function type_of_number_Function() {
    document.write(typeof 3);
    document.getElementById("demo").innerHTML = document.write;
}

function positive_infinity_Function() {//Function to get a infinty display
    document.write(2E310);
    document.getElementById("positive").innerHTML = document.write;
}

function negative_infinity_Function() {
    document.write(-3E310);
    document.getElementById("negative").innerHTML = document.write;
}

function boolean_Function() {//This should come out with a false statement
    document.write(10 < 2);
    document.getElementById("boolean").innerHTML = document.write;
}

function coolean_Function() {//This should come out with a true statement
    document.write(2 < 10);
    document.getElementById("coolean").innerHTML = document.write;
}

function console_Function() {//This will pop up with 4 in the console log
    console.log(2 + 2);
    document.getElementById("console").innerHTML = console.log;
}

function coercion_Function() {
    document.write("10" + 5);
    document.getElementById("coercion").innerHTML = document.write;
}

function positive_Function() {
    document.write(10==10);
    document.getElementById("pos").innerHTML = document.write;
}

function negative_Function() {
    document.write(3==11);
    document.getElementById("neg").innerHTML = document.write;
}

function positive_triple_equals_Function() {//We are getting a true statement here as X and Y are both the same data type and value
    X = 10;
    Y = 10;
    document.write(X===Y);
    document.getElementById("pos1").innerHTML = document.write;
}

function negative_triple_equals_Function() {// THis will be a false statement as they are differnet data types even with the same value
    X = "82";
    Y = 82;
    document.write(X===Y);
    document.getElementById("neg1").innerHTML = document.write;
}

function false_triple_equals_Function() {//This will be false as both data types and values are different
    X = "15"
    Y = 2;
    document.write(X===Y);
    document.getElementById("neg2").innerHTML = document.write;
}

function false1_triple_equals_Function() {//This comes out false although both data types are the same their values are different
    X = "This is a string";
    Y = "This is also a string";
    document.write(X===Y);
    document.getElementById("neg3").innerHTML = document.write;
}

function positive_and_boolean_Function() {
    document.write(4 > 1 && 10 > 2);
    document.getElementById("posbool").innerHTML = document.write;
}

function negative_and_boolean_Function() {
    document.write(4 > 10 && 10 > 2);
    document.getElementById("falsebool").innerHTML = document.write;
}

function positive_or_boolean_Function() {
    document.write(5 > 10 || 10 > 4);
    document.getElementById("pos1bool").innerHTML = document.write;
}

function negative_or_boolean_Function() {
    document.write(5 > 10 || 10 > 20);
    document.getElementById("false1bool").innerHTML = document.write;
}

function positive_not_boolean_Function(){
    document.getElementById("NOTpos").innerHTML = !(5 > 20);
}

function negative_not_boolean_Function(){
    document.getElementById("NOTneg").innerHTML = !(20 > 10);
}