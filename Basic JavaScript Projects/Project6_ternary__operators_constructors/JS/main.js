function Ride_Function() {//A ternary operation function
    var Age, Can_Ride;
    Age = document.getElementById("Height").value;
    Can_ride = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {//A constructor for the class of Vehicle
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//Instances of the class
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Jeep", "Pinto", 1971, "Mustard");

function keyword_Function() {
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() {//My main count function i will be calling in my HTML
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}//My nested function inside the count function to increment the starting point by 1
        Plus_one();
        return Starting_point;
    }
}