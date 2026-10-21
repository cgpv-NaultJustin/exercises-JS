let age = -1;
if (Number.isInteger(age) && age >= 0) {
    if (age < 18) {
        console.log("mineure");
    }
    else {
        console.log("majeure");
    }

}
else {
    console.log("non valide");
}
let nombre = 2;
let estPair;
nombre % 2 == 0 ? estPair = true : estPair = false;
console.log(estPair);

let note = 99;

if (note >= 90) {
    console.log("Excellent");
}
else if (note >= 75) {
    console.log("Très bien");
}
else if (note >= 60) {
    console.log("bien");
}
else {
    console.log("ECHEC");
}

let temperature = 30;

if (temperature < 0) {
    console.log("il gele");
}
else if (temperature >= 0 && temperature <= 15) {
    console.log("Il fait frais");
}

else if (temperature >= 16 && temperature <= 25) {
    console.log("Température agréable");
}
else {
    console.log("il fait chaud");
}

let connecte = false;
let role = "admin";

if (connecte == true && role == "admin") {
    console.log("Bienvenue administrateur");
}
else if (connecte == true && role == "utilisateur") {
    console.log("Bienvenue utilisateur");
}
else if (connecte == true) {
    console.log("Bienvenue rôle inconnu");
}
else {
    console.log("Accès refusé");
}
let choix = 1;
let message;
switch (choix) {
    case 1:
        message = "Nouvelle partie";
        break;
    case 2:
        message = "Charger une partie";
        break;
    case 3:
        message = "Quitter";
        break;
    default:
        message = "Option Invalide";
        break;
}
console.log(message);
let mois = "janvier";
mois = mois.toLowerCase();
let messageMois;
switch (mois) {
    case "janvier":
        messageMois = "Hiver";
        break;
    case "février":
        messageMois = "Hiver";
        break;
    case "décembre":
        messageMois = "Hiver";
        break;
    case "mars":
        messageMois = "Printemps";
        break;
    case "avril":
        messageMois = "Printemps";
        break;
    case "mai":
        messageMois = "Printemps";
        break;
    case "juin":
        messageMois = "Été";
        break;
    case "juillet":
        messageMois = "Été";
        break;
    case "août":
        messageMois = "Été";
        break;
    case "septembre":
        messageMois = "Automne";
        break;
    case "octobre":
        messageMois = "Automne";
        break;
    case "novembre":
        messageMois = "Automne";
        break;
}
console.log(messageMois);