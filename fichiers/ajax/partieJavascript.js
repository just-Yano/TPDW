//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function recupererPremierEnfantDeTypeElement(n) {
    var x = n.firstChild;
    while (x.nodeType != 1) { // Test if x is an element node (and not a text node or other)
        x = x.nextSibling;
    }
    return x;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//change le contenu de l'�lement avec l'id "nom" avec la chaine de caract�res en param�tre	  
function setName(nom) {
    var elementHtmlARemplir = window.document.getElementById("id_nom_a_remplacer");
    elementHtmlARemplir.innerHTML = nom;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//charge le fichier XML se trouvant � l'URL relative donn� dans le param�treet le retourne
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Charge le fichier JSON se trouvant � l'URL donn�e en param�tre et le retourne
function chargerHttpJSON(jsonDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    // chargement du fichier JSON � l'aide de XMLHttpRequest synchrone (le 3� param�tre est d�fini � false)
    httpAjax.open('GET', jsonDocumentUrl, false);
    httpAjax.send();

    var responseData = eval("(" + httpAjax.responseText + ")");

    return responseData;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton2_ajaxEmployees(xmlDocumentUrl) {


    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    //extraction des noms � partir du document XML (avec une feuille de style ou en javascript)
    var lesNoms = xmlDocument.getElementsByTagName("LastName");

    // Parcours de la liste des noms avec une boucle for et 
    // construction d'une chaine de charact�res contenant les noms s�par�s par des espaces 
    // Pour avoir la longueur d'une liste : attribut 'length'
    // Acc�s au texte d'un noeud "LastName" : NOM_NOEUD.firstChild.nodeValue
    var chaineDesNoms = "";
    for (i = 0; i < lesNoms.length; i++) {
        if (i > 0) {
            chaineDesNoms = chaineDesNoms + ", ";
        }
        chaineDesNoms = chaineDesNoms + lesNoms[i].firstChild.nodeValue + " ";
    }


    // Appel (ou recopie) de la fonction setName(...) ou bien autre fa�on de modifier le texte de l'�l�ment "span"
    setName(chaineDesNoms);



}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton3_ajaxBibliographie(xmlDocumentUrl, xslDocumentUrl, baliseElementARecuperer) {

    // Chargement du fichier XSL � l'aide de XMLHttpRequest synchrone 
    var xslDocument = chargerHttpXML(xslDocumentUrl);

	//cr�ation d'un processuer XSL
    var xsltProcessor = new XSLTProcessor();

    // Importation du .xsl
    xsltProcessor.importStylesheet(xslDocument);

    // Chargement du fichier XML � l'aide de XMLHttpRequest synchrone 
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    // Cr�ation du document XML transform� par le XSL
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

    // Recherche du parent (dont l'id est "here") de l'�l�ment � remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    
	// ins�rer l'�lement transform� dans la page html
    elementHtmlParent.innerHTML=newXmlDocument.getElementsByTagName(baliseElementARecuperer)[0].innerHTML;
	

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton4_ajaxBibliographieAvecParametres(xmlDocumentUrl, xslDocumentUrl, baliseElementARecuperer, paramXSL_type_reference) {

    // Chargement du fichier XSL � l'aide de XMLHttpRequest synchrone 
    var xslDocument = chargerHttpXML(xslDocumentUrl);

	//cr�ation d'un processuer XSL
    var xsltProcessor = new XSLTProcessor();

    // Importation du .xsl
    xsltProcessor.importStylesheet(xslDocument);
	
	//passage du param�tre � la feuille de style
	xsltProcessor.setParameter("", "param_ref_type",paramXSL_type_reference);

    // Chargement du fichier XML � l'aide de XMLHttpRequest synchrone 
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    // Cr�ation du document XML transform� par le XSL
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

    // Recherche du parent (dont l'id est "here") de l'�l�ment � remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    
	// ins�rer l'�lement transform� dans la page html
    elementHtmlParent.innerHTML=newXmlDocument.getElementsByTagName(baliseElementARecuperer)[0].innerHTML;
	

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton4_ajaxEmployeesTableau(xmlDocumentUrl, xslDocumentUrl) {
    //commenter la ligne suivante qui affiche la bo�te de dialogue!
    alert("Fonction � compl�ter...");
}
