function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Function() {
    var str = "Hello this is a very long sentence using many words!"
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Guitar", "Piano", "Bass", "Drums", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "eating";
    Dog_Picture[2] = "playing";
    Dog_Picture[3] = "barking";
    Dog_Picture[4] = "drinking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[3] + ".";
}

function constant_Function() {
    const Car_Model = {type:"Jeep", model:"XY123", color:"Ruby Red"};
    Car_Model.color = "green";
    Car_Model.price = "45,000";
    Car_Model.make = "F-150"
    Car_Model.newprice = "55,000"
    document.getElementById("Constant").innerHTML = "The cost of this " + Car_Model.type + " was " + Car_Model.price + " unless you wanted the " + Car_Model.make + " version. " + "That would come out to " + Car_Model.newprice;
}


var X = 45;
document.getElementById("Let").innerHTML = X;
function Let_Function() {
    let X = 23;
    document.getElementById("Let").innerHTML = X;
}
document.getElementById("Let").innerHTML = ("<br>" + X);

function return_Function() {
    return Math.PI;    
}
document.getElementById("Return").innerHTML = return_Function();

let bus = {
    make: "Yellow Submarine ",
    model: "Y-150 ",
    year: "1972 ",
    color: "yellow ",
    description : function() {
        return "The bus is a " + this.year + this.model + this.color + this.make;
    }
};
document.getElementById("let_properties").innerHTML = bus.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var str = "";
var X;
for (x = 0; x < 10; x++) {
    if (x === 4) { continue; }
    str += "The number is " + x + "<br>";
}
document.getElementById("continue").innerHTML = str;