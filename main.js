// #1
var numOne = 5,
    numTwo = 7;

var sum = numOne + numTwo;
    console.log(sum);

var opening =("Heeeey!!!"),
    closing =(" Hey Freeeen!");
    console.log( opening + closing);

//#3 
var num = prompt("Type in your number" + num);
if (num < 100) {
   alert("Not doing enough");
}else{
   alert(" And now you doing the most " + num );
}

//#4

var num = prompt("Type in your number" + ("num"));
if (num > 100) {
  alert("Doin the least ");
}else{
  alert(" Doin the most  " + (num));


//#5
var a = "Mangoes!!";
var b = "Yep! We love mangoes!";
if (a === b) {
   alert("Yup. That's the same ");
}else{
   alert(" Nope. Nah. " );
}
//#6
function newName(name) {
    console.log(name);
}

newName("kim");

//#7 
function noName() {
    console.log("There's no name.");
}

noName();

//#8
function door(choice) {
    if (choice === 1) {
         alert("You won an apple.");
    } else if (choice === 2) {
         alert("You won a sode");
     } else { 
         alert("You get nothing");
     }
 }

 door(1);