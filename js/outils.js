//Gestion de la barre d'outils

function prepareOutils() {
    // creation nodeList
    let buttons = document.querySelectorAll("#forme > button");

    //écoute l'evenement click sur la nodeList
    Array.prototype.forEach.call(buttons, (e) => {
        e.onclick = onChangeForme;
    });

    document.getElementById("taille").onChange = onChangeTaille;
    document.getElementById("couleur").onChange = onChangeCouleur;

    cfg.hauteurOutils = 50;
}

function changeForme(forme, sauvegarde) {
    //change l'état de la selection
    document.getElementById(cfg.forme).classList.remove("actif");
    document.getElementById(forme).classList.add("actif");
    // sauvegarde pinceau
    cfg.forme = forme;
    if (sauvegarde && supporteLocalStorage) {
        localStorage.setItem("formePinceau", forme);
    }
}

function updateInputs() {
    document.getElementById("taille").value = cfg.taille;
    document.getElementById("couleur").value = cfg.couleur;
}

function onChangeForme(e) {
    const forme = e.currentTarget.id;
    changeForme(forme, true);
}

function onChangeTaille(e) {
    const taille = parseInt(e.currentTarget.value, 10);
    cfg.taille = taille;
    if (supporteLocalStorage) {
        localStorage.setItem("taille", taille);
    }
}

function onChangeCouleur(e) {
    const couleur = e.currentTarget.value;
    cfg.couleur = couleur;
    if (supporteLocalStorage) {
        localStorage.setItem("couleur", couleur);
    }
}

prepareOutils();

