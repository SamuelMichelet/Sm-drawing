//sauvegarde états du document

const cfg = {
    forme: "rond",
    taille: 10,
    couleur: "black",
    dessine: false,
    hauteurOutils: 0,
    marge: 20
};

//compatibilité
const supporteLocalStorage = typeof localStorage !== "undefined";

//récupération des data depuis localStorage
function recupereSauvegarde() {
    let forme = "rond";
    let  taille = 10;
    let couleur = "black";
    if (supporteLocalStorage) {
        couleur = localStorage.getItem("couleur") || couleur;
        taille = parseInt(localStorage.getItem("taille") || taille);
        forme = localStorage.getItem("forme") || forme;
    }

    //maj pinceau
    cfg.couleur = couleur;
    cfg.taille = taille;
    changeForme(forme);

    //maj avec valeurs initial
    updateInputs();
}

//recupere les sauvegardes
addEventListener("DOMContentLoaded", recupereSauvegarde);

