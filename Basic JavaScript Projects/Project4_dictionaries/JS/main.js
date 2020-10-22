function my_Dictionary() {//Created a dictionary with KVP's
    var Animal = {
        Species:"Dog",
        Color:"Blue",
        Breed:"Pitbull",
        Age:3,
        Sound:"Woof!"
    };
    delete Animal.Sound;//Deleted the value Sound from the Animal dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
    document.getElementById("sound").innerHTML = Animal.Sound;//Tried to call sound from the dictionary but failed since we deleted it
}