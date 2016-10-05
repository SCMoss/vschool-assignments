

    // Write a program that accepts a string as input. Write a loop to print out each letter of that string individually.

    // Write a program that accepts a string as input. Then ask the user for a character. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

    // Write a program that accepts numbers (each on a new line) as input. Quit the program when the number 42 is entered.

    // Write a program that accepts 10 numbers (each on a new line) and then prints out the smallest number out of the ten.


// var myString = "Steven";
//
// for(i = 0; i < myString.length; i++) {
// 	console.log(myString)
// }



// var myArray = ["steven", true, 9, "bob"];
//
// for (var i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
//
// }

// function printLetters(string) {
// 	for (var i = 0; i < string.length; i++){
// 		console.log(string[i]);
// 	}
// }
// printLetters("steven")

var yourString = prompt("Can you type...? prove it!");
var yourLetter = prompt("Please type a letter");
for (var i = 0; i < yourString.length; i++){
	if (yourLetter === yourString[i]) {
		console.log(i)
		break;
	} else {
		console.log("Letter not found jive turkey!")
	}
}





