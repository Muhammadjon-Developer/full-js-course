"use strict";

// alert("Hello JavaScript"); // alert shows to us some message

// const place = confirm("Are you here?"); // you can click to ok or to cancel and we can to get values of this buttons in our variable and if user clisk to cancel we get false, if use click to ok button we get true in console: 
// console.log(place);


// const currentPlace = prompt("Where are you?", "in the park")  // prompt is used to ask the user a question, so we can get a complete answer, not just yes or no. 1 string is message that we give to a user, 2 message is the default value
// console.log(currentPlace); // there we will get a answer of the user 


// const age = +prompt("How old are you?", "18"); // remember that propmt always returns string so front of prompt you need to paste + to get number data type 
// console.log( typeof age); 

const favouriteColor = [];   // working array + propmt
favouriteColor[0] = prompt("What's your favourite color #1", "")
favouriteColor[1] = prompt("What's your favourite color #2", "")
favouriteColor[2] = prompt("What's your favourite color #3", "")
console.log(favouriteColor); 