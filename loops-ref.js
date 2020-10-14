const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
///////////////////////////////////////////////////////////////////////////
var sound = '' ;
function laugh(num) {
 for (var i = 0; i < num; i++) {
     sound = sound + 'ha';
 }   
   sound = sound + '!' ;
    return sound;
}
///////////////////////////////////////////////////////////////////////////
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
var star = 0;
function buildTriangle(rows) {
  for(var num = 0; num <= rows; num ++){
      console.log(makeLine(star));
      star = star + 1;
  }

  star = '';
  return star;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));
///////////////////////////////////////////////////////////////////////////

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");