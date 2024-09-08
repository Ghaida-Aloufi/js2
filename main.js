//Conditional

var eatsPlants = false;
var eatsAnimals = true;

var x = eatsPlants && eatsAnimals ? "omnivore" : (eatsAnimals ? "carnivore" : (eatsPlants ? "herbivore" : undefined));

console.log(x);



//Musical Groups

var musicians = 0;

if (musicians <= 0) {
  console.log("not a group");
}
else if (musicians == 1) {
  console.log("solo");
}
else if (musicians == 2) {
  console.log("duet");
}
else if (musicians == 3) {
  console.log("trio");
}
else if (musicians == 4) {
  console.log("quartet");
} else if (musicians > 4) {
  console.log("this is a large group");

}



//Murder mystery

var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison"; solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy"; solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick"; solved = true;
} else {
  weapon = "knife"; solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//Checking Your Balance

var balance = -325;
var checkBalance = true;
var isActive = true;


if (balance < 0) {
  console.log("insufficient balancet");

} else if (balance > 0) {
  console.log("transfer the amount");

} else if (checkBalance && isActive) {
  console.log("show balance")
}
else {
  console.log("try again")

}

//Ice Cream
`flavor=vanilla`, `vessel=cone`, and`toppings=sprinkles`


if (flavor === "vanilla" || flavor === "chocolate") {
  if (vessel === "cone" || vessel === "bowl") {
    if (toppings === "sprinkles" || toppings === "peanuts") {
      console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");

    }
    else {
      console.log("Sorry, there are none.");
    }
  }
  else {
    console.log("Sorry, this type does not exist.")
  }
}
else {
  console.log("Sorry, this flavor is not available.");

}