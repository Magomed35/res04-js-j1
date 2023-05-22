let  FirstName= window.prompt("Quel est votre prénom ?");
let  LastName= window.prompt("Quel est votre nom ?");
let  Age= window.prompt("Quel est votre age ?");

if (Age<13) {
    window.alert("Pas d'accés au site.")
} else if(Age>=13 && Age <= 18){
    window.alert("Accés restreint au site")
}else{
    window.alert("Accés complet au site")
}

