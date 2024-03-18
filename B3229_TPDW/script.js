// Question 1
function changerCouleurFontButton1() {
    document.body.style.backgroundColor = "blue"
    document.getElementById("buttonCouleurFontBleu").style.color = "white"
}

// Question 2
function changerCouleurFontButton2() {
    document.body.style.backgroundColor = "white"
}


// Question 3
function chargerPays(xmlDocumentUrl, xslDocumentUrl, baliseElementARecuperer, paramXSL_type_reference, idBaliseModifier) {

    // Chargement du fichier XSL � l'aide de XMLHttpRequest synchrone 
    var xslDocument = chargerHttpXML(xslDocumentUrl);

	//cr�ation d'un processuer XSL
    var xsltProcessor = new XSLTProcessor();

    // Importation du .xsl
    xsltProcessor.importStylesheet(xslDocument);
	
	//passage du param�tre � la feuille de style
	xsltProcessor.setParameter("", "code",paramXSL_type_reference);

    // Chargement du fichier XML � l'aide de XMLHttpRequest synchrone 
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    // Cr�ation du document XML transform� par le XSL
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

    // Recherche du parent (dont l'id est "here") de l'�l�ment � remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById(idBaliseModifier);
    
	// ins�rer l'�lement transform� dans la page html
    elementHtmlParent.innerHTML=newXmlDocument.getElementsByTagName(baliseElementARecuperer)[0].innerHTML;
	

}

// fonction pour faire une requete HTTP(AJAX)
function chargerHttpXML(xmlDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    //chargement du fichier XML � l'aide de XMLHttpRequest synchrone (le 3� param�tre est d�fini � false)
    httpAjax.open('GET', xmlDocumentUrl, false);
    httpAjax.send();

    return httpAjax.responseXML;
}

// Question 4
function chargerImage1SVG() {
    var xmlDoc = chargerHttpXML('../fichiers/ajax/exemple.svg')
    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(xmlDoc);
    var button = document.getElementById('ImageCercle')
    button.innerHTML = str

    // Question 5
    // on retrouve tous les elements du fichier SVG
    var elements = document.querySelectorAll('#lesFormes g *')
    elements.forEach(function(elem){
        elem.addEventListener("click", function(){
            var child = document.createElement('p')
            child.textContent = elem.getAttribute('title')
            document.getElementById('ImageCercle').appendChild(child)
        })
    })
}

// Question 6
function chargerImage2SVG() {
    var xmlDoc = chargerHttpXML('../fichiers/ajax/worldHigh.svg')
    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(xmlDoc);
    var button = document.getElementById('worldMapImage')
    button.innerHTML = str

    // Question 7
    // on retrouve tous les elements du fichier SVG
    var elements = document.querySelectorAll('svg g path')
    var countryname; // variable utilise pour sauvegarder le pays qui a ete clique
    elements.forEach(function(elem){
        elem.addEventListener("click", chargerPays('countriesTP.xml', 'infoUnPays.xsl', 'element_a_recuperer', elem.getAttribute('countryname'), 'tableauInfo'))
        // Question 8 
        elem.addEventListener("mouseover", function(event) {
            elem.setAttribute('style', 'fill:red')  
        })

        elem.addEventListener("mouseleave", function(event) {
            elem.setAttribute('style', 'fill:')  
        })
    })
}




//Question 12

function chargerRandomPays(xmlDocumentUrl, xslDocumentUrl){
    var xslDocument = chargerHttpXML(xslDocumentUrl);
    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslDocument);
    var randomNumber = Math.floor(Math.random()*99)+1;
    xsltProcessor.setParameter("", "random_number",randomNumber);
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
    var elementHtmlARemplacer = window.document.getElementById("random_pays");
    elementHtmlARemplacer.innerHTML=newXmlDocument.getElementsByTagName('element_a_recuperer')[0].innerHTML;;

    
}