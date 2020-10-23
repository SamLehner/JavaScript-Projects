function complete_Sentence() {//Using a concat function to put togethor all the strings
    var comp_1 = "I have ";
    var comp_2 = "found the ";
    var comp_3 = "missing words ";
    var comp_4 = "to my sentence!";
    var whole_sentence = comp_1.concat(comp_2, comp_3, comp_4);
    document.getElementById("missing_sentence").innerHTML = whole_sentence;
}

function slice_n_dice_method() {//Slicing a peice of a string using a function
    var Sentence = "Here is a slice of pie!.";
    var Section = Sentence.slice(19,23);
    document.getElementById("slice_n_dice").innerHTML = Section;
}

function upper_case_Function() {//Making a sentence uppercaser using .toUpperCase
    var Lower = "this sentence is all in lower case letters!";
    var Upper = Lower.toUpperCase();
    document.getElementById("upper_case").innerHTML = Upper;
}

function lost_and_found_Function() {//Finding the data were looking for with .search
    var Sentence = "Theres are many a word in this sentence.";
    var Search = Sentence.search("word");
    document.getElementById("lost_and_found").innerHTML = Search;
}

function number_Method() {
    var X = 12;
    document.getElementById("numbers_to_string").innerHTML = X.toString(X);
}

function precision_Method() {//Making a number more precise using the .toPRecision
    var X = 12356.31215467651;
    document.getElementById("precise_mode").innerHTML = X.toPrecision(11);
}

function fixed_Method() {//Making a number fixed with a function
    var X = 12.6543
    document.getElementById("fixed_num").innerHTML = X.toFixed(2);
}

function value_of_Function() {//Getting the value of the data using .valueof
    var D = new Date();
    var N = D.valueOf();
    document.getElementById("value_of").innerHTML = N;
}