
// LE CORRIGER


let randomNbr = Math.random() * (100 - 1) + 1; // ça c'est bonus c'est pour avoir un nombre aléatoire
let nbr = Math.floor(randomNbr);
let guess = -1;

while(parseInt(guess) !== nbr)
{
        guess = parseInt(window.prompt("Saisissez un nombre : "));
    
    if(guess > nbr)
    {
        window.alert("Le nombre est plus petit");
    }
    else if(guess < nbr)
    {
        window.alert("Le nombre est plus grand");
    }
    else
    {
            window.alert("C'est gagné !");
        break;
    }
}




// MON EXERCICE


// let randomNumber = Math.floor(Math.random() * 101);

// function devinerNombre() {
    
//   var userNumber = parseInt(window.prompt("Devinez le nombre (entre 0 et 100) :"));

//   if (userNumber < randomNumber) {
//     window.alert("C'est plus !");
//     devinerNombre();
//   } else if (userNumber > randomNumber) {
//     window.alert("C'est moins !");
//     devinerNombre();
//   } else {
//     window.alert("Bravo, vous avez gagné !");
//   }
// }

// devinerNombre();
