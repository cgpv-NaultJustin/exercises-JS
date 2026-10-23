noms = ["evan", "antoine", "samuel", "thom", "justin"];
noms.push("robin");
noms.unshift("jerome");
for (let i = 0; i < noms.length; i++) {
    console.log(noms[i]);
}
for (let nom of noms) {
    console.log(nom);
}
noms.forEach((nom) => {
    console.log(nom);
});
let notes = [85, 42, 67, 90, 58, 73];

let notesReussie = notes.filter((note) => {
    return note >= 60;
})
console.log(notesReussie);
console.log(notesReussie[notesReussie.length - 1]);
let prix = [10, 25, 30, 5, 15];

let prixTaxes = prix.map((taxe) => {
    return taxe * 1.15;
})
console.log(prix, prixTaxes);

let nombres = [2, 5, 8, 11, 14, 17];

let nombresFinals = nombres.filter((nombre) => {
    return nombre % 2 == 0;
}).map((nombre) => {
    return nombre * 3;
})
console.log(nombresFinals);

let produits = [
    { nom: "Chocolat", prix: 3 },
    { nom: "Chips", prix: 2 },
    { nom: "Café", prix: 8 },
    { nom: "Pain", prix: 4 }
];

let produitsAbordables = produits.filter((produit) => {
    return produit.prix <= 5;
})
console.table(produitsAbordables);

let nomAbordable = produitsAbordables.map((produit) => {
    return produit.nom;
})
console.log(nomAbordable);