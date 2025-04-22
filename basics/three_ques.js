//Q.1    Print all even numbers from 0 to 100.  //

function evenNum(){
    for ( let i = 0 ; i <= 100 ; i++ ) {
    if ( i %2 === 0 ) {
  console.log(i);
      }
    }
}

evenNum();


//  Q.2  Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value. //


function guessNum(gameNum) {
  while(true){
    let userNum = parseInt(prompt("Enter the Number: "))
  if ( userNum === gameNum ) {
    console.log("You Won");
    break;
  } else {
      console.log("Try Again !");
  }
}
}

guessNum(21);


//  Qs3. Prompt the user to enter their full name. Generate a username for them based on the input.
//     Start username with @, followed by their full name and ending with the fullname length.//

function name(user){
    let count = user.length;
   let username = `@${user.replace(/\s+/g, '')}${count}`;
return username;
}

console.log(name("Anuj Dubey"));





  
