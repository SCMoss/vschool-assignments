
// The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console.

var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"];

function consolePrint(nameOfArray) {
    var sing = lyrics.toString();
    var splitSing = sing.replace(/,/g, " ");
    return splitSing;
}
console.log(consolePrint(lyrics));
//can also use .join() instead of .toString()
// "takes a string" means set string as a parameter * * * * * * * * * *


/* --------NOTES---------
   declare variable: var

   declare function {
   declare local variables;
   return;
   }
   console.log (function());


*/

var arrayBackwards = function (lyricsArray) {
        console.log(lyricsArray.reverse().toString)

}




/* why create an empty array??? What is the purpose? what do you push into ??
(/ find this /g, change to that); *************** means (search the entire string for____ , change into____); */


// (JAVASCRIPT reverse method w3school) The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).

// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.