var X = 10//Global Variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X = 10//Local Variable
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {//Debugging with the console log
    var X = 10
    console.log(20 + X + "<br>");
}
function Add_numbers_2() {
    console.log(X + 100);
}

Add_numbers_1();
Add_numbers_2();


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function new_Function() {//An if statement
    if (25 > 2) {
    document.getElementById("NewGreeting").innerHTML = "25 is indeed greater than 2"    
    }
}

function Rent_a_car_Function() {//Using an If else statement to see if people are able to rent a car
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to rent this car!";
    }
    else {
        Vote = "Sorry, you are not old enough to rent from us."
    }
    document.getElementById("Years").innerHTML = Vote;
}

function Time_function() {//Using if and else statements to decide what time it is between 3 choices
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}