/**
 * Message "allo" type string
 */
const messageAllo = () => {
    console.log("allo");
}
messageAllo();
/**
 * Donne la saison pour le mois de l'annee donner
 * 
 * 
 * @param {string} mois  le mois de l'annee
 * @returns la saison du mois choisi 
 */
const saison = (mois) => {
    switch (mois) {
        case "janvier":
        case "février":
        case "décembre":
            messageMois = "Hiver";
            break;

        case "mars":
        case "avril":
        case "mai":
            messageMois = "Printemps";
            break;
        case "juin":
        case "juillet":
        case "août":
            messageMois = "Été";
            break;

        case "septembre":
        case "octobre":
        case "novembre":
            messageMois = "Automne";
            break;

    }
    return messageMois;
}
console.log(saison("octobre"));
/**
 * entre un age et determine si majeur (bool)
 * @param {int} age age entrer  
 * @returns true ou false
 */
const estMajeur = (age) => {
    return age >= 18 ? true : false;
}
if (estMajeur(18)) {
    console.log("vous pouvez entrer");
}
const salutation = document.getElementById('btn');
/**
 * demande a utilisateur son prenom et son nom pour ensuite l'afficher
 */
const demande = () => {
    let prenom = prompt("Quel est votre prenom?");
    let nom = prompt("Quel est votre nom?");
    alert("Bonjour " + prenom + " " + nom);
}


salutation.addEventListener('click', demande);