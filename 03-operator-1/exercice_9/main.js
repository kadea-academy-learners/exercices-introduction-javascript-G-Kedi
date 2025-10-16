// Exercice 9
// Écrivez votre code ici
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;

const patrimoineTotal = maison + terrains + liquidites; // 120000000

// Catégories
const partCategorie1 = patrimoineTotal * 0.75; // enfants -> 75%
const partCategorie2 = patrimoineTotal * 0.25; // conjoint+frères -> 25%

// Première catégorie (3 parts égales : Paul, Marie, Alain)
// Alain est décédé -> sa part est partagée entre Éric et clair (50/50)
const partEnfant = partCategorie1 / 3;
const paul = partEnfant;
const marie = partEnfant;
const alainPart = partEnfant;
const eric = alainPart / 2;
const clair = alainPart / 2;

// Deuxième catégorie (3 bénéficiaires à parts égales : Madame MUKUNA, Joseph, Sarah)
const partSecondaire = partCategorie2 / 3;
const madameMukuna = partSecondaire;
const joseph = partSecondaire;
const sarah = partSecondaire;

// Affichage
console.log("Patrimoine total :", patrimoineTotal, "CDF");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("clair :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

module.exports = {
  patrimoineTotal,
  maison,
  terrains,
  liquidites,
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah
};