let FirstNumber= window.prompt("Entrez un nombre");
let Signe= window.prompt("Entrez un opérateur arithmétique");
let LastNumber= window.prompt("Entrez un nombre");


let result = (FirstNumber+Signe+LastNumber);

if(isNaN(FirstNumber)){
    console.log("Ce n'est pas un nombre");
    window.alert("Ce n'est pas un nombre")
}
else if(isNaN(LastNumber)){
    console.log("Ce n'est pas un nombre");
    window.alert("Ce n'est pas un nombre")

}

    
if (Signe === "+") {
    console.log(Number(FirstNumber) + Number(LastNumber));
    document.write(Number(FirstNumber) + Number(LastNumber));
}
else if (Signe === "-") {
    console.log(Number(FirstNumber) - Number(LastNumber));
    document.write(Number(FirstNumber) + Number(LastNumber));
}
else if (Signe === "*") {
    console.log(Number(FirstNumber) * Number(LastNumber));
    document.write(Number(FirstNumber) + Number(LastNumber));
}
else if (Signe === "/") {
    console.log(Number(FirstNumber) / Number(LastNumber));
    document.write(Number(FirstNumber) + Number(LastNumber));
}

console.log(result);


