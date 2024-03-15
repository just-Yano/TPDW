function changerCouleurFontButton1() {
    document.body.style.backgroundColor = "blue"
    document.getElementById("buttonCouleurFontBleu").style.color = "white"
}

function changerCouleurFontButton2() {
    document.body.style.backgroundColor = "white"
}

// TODO 
function chargerPays() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '../fichiers/countriesTP.xml', true); 

    // fonction pour gere la reponse
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // le document a ete charge avec succes
                var xmlDoc = xhr.responseXML; 
                afficherPays(xmlDoc); // fonction pour gere le resultat de la requete
            } else {
                // erreur lors de la requet ajax
                console.error('Error:', xhr.status);
            }
        }
    };

   xhr.send();
}

function afficherPays(xmlDoc) {

}