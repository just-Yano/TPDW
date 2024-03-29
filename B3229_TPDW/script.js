//Copié collé depuis le document SVG tout simplement
const datalist = [{id:"AD"},{id:"AE"},{id:"AF"},{id:"AG"},{id:"AI"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AS"},{id:"AT"},{id:"AU"},{id:"AW"},{id:"AX"},{id:"AZ"},{id:"BA"},{id:"BB"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BH"},{id:"BI"},{id:"BJ"},{id:"BL"},{id:"BN"},{id:"BO"},{id:"BM"},{id:"BQ"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BV"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CC"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CK"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CV"},{id:"CW"},{id:"CX"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DM"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EG"},{id:"EE"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FI"},{id:"FJ"},{id:"FK"},{id:"FM"},{id:"FO"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GD"},{id:"GF"},{id:"GG"},{id:"GH"},{id:"GI"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GO"},{id:"GP"},{id:"GQ"},{id:"GR"},{id:"GS"},{id:"GT"},{id:"GU"},{id:"GW"},{id:"GY"},{id:"HK"},{id:"HM"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IM"},{id:"IN"},{id:"IO"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JE"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"JU"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KI"},{id:"KM"},{id:"KN"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KY"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LC"},{id:"LI"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MC"},{id:"MD"},{id:"MG"},{id:"ME"},{id:"MF"},{id:"MH"},{id:"MK"},{id:"ML"},{id:"MO"},{id:"MM"},{id:"MN"},{id:"MP"},{id:"MQ"},{id:"MR"},{id:"MS"},{id:"MT"},{id:"MU"},{id:"MV"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NF"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NR"},{id:"NU"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PF"},{id:"PG"},{id:"PH"},{id:"PK"},{id:"PL"},{id:"PM"},{id:"PN"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PW"},{id:"PY"},{id:"QA"},{id:"RE"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SC"},{id:"SD"},{id:"SE"},{id:"SG"},{id:"SH"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SM"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"ST"},{id:"SV"},{id:"SX"},{id:"SY"},{id:"SZ"},{id:"TC"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TK"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TO"},{id:"TR"},{id:"TT"},{id:"TV"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"UM-DQ"},{id:"UM-FQ"},{id:"UM-HQ"},{id:"UM-JQ"},{id:"UM-MQ"},{id:"UM-WQ"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VA"},{id:"VC"},{id:"VE"},{id:"VG"},{id:"VI"},{id:"VN"},{id:"VU"},{id:"WF"},{id:"WS"},{id:"YE"},{id:"YT"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];
var hover = false;

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




// Question 1
// Button 1: Changes the page background color to blue and the button text color to white.
function changerCouleurFontButton1() {
    document.body.style.backgroundColor = "blue";
    document.getElementById("buttonCouleurFontBleu").style.color = "white";
}

// Question 2
//Button 2: resets the background color to white
function changerCouleurFontButton2() {
    document.body.style.backgroundColor = "white";
    document.getElementById("buttonCouleurFontBleu").style.color = "";

}


// Question 3
//Button 3 / Input field: displays the official name and the capital of the country whose code is selected in the input field. 
//Load the XML file countriesTP.xml in ajax. Write a style sheet: cherchePays.xsl, which takes a parameter code, load it in ajax as well.
//This style sheet applied to the xml file: countriesTP.xml returns the searched elements corresponding to the country. 
//Use the javascript function XSLTProcessor.setParameter to pass the parameter to the stylesheet.
function chargerXMLetTransformer(xmlDocumentUrl, xslDocumentUrl, baliseElementARecuperer, paramXSL_type_reference, idBaliseModifier) {
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



// Question 4
//Button 4: load and display the svg drawing contained in the file: exemple.svg.
function chargerImage1SVG() {
    var xmlDoc = chargerHttpXML('svg/exemple.svg');
    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(xmlDoc);
    var button = document.getElementById('ImageCercle');
    button.innerHTML = str;
}

// Question 5
//Button 5: makes the elements of the svg file "clickable" and displays the value of their attribute title when they are clicked.
function rendreSVG1cliquable() {
    var elements = document.querySelectorAll('#lesFormes g *');

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            document.getElementById('titreObjetImage').innerHTML = this.getAttribute('title');
        });
    }
}

// Question 6
//Button 6: load and display the world map in svg contained in the file worldHigh.svg
function chargerImage2SVG() {
    var xmlDoc = chargerHttpXML('svg/worldHigh.svg');
    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(xmlDoc);
    var button = document.getElementById('worldMapImage');
    button.innerHTML = str;
}

// Question 7
//Button 7: makes countries clickable and displays their attribute countryname on click
function countryclickable() {
    //selection de la liste des elements SVG
    var elements = document.querySelectorAll('svg g path');

    //Parcours de la liste sélectionné et ajouter un évènement sur clique pour chacun des événements
    for (let elem of elements){
        elem.addEventListener("click", function(){
            //MAJ du document HTML pour afficher le bon pays cliquer
            document.getElementById("CountryClicked").innerHTML = this.getAttribute('countryname')});
    }
}

// Question 8
//Button 8: capture the passing ( mouseover) and exiting ( mouseleave) event of the mouse over the countries on the map. 
//By the way: change their color and display their: name, capital, languages ​​spoken and flag in a table above the map
function activateCountryHover() {
    //selection de la liste des elements SVG
    var elements = document.querySelectorAll('svg g path');

    for(let i = 0; i < elements.length; i++) {
        // activation du hover sur les pays
        var style; 
        elements[i].addEventListener("mouseover", function(){
            style = this.getAttribute('style'); // on cree une sauvegarde du style avant de le mettre a jour pour le rendre dans la suite
            this.setAttribute('style', 'fill:red');
        });

        // Vérifier que le hover se désactive quand la souris n'est plus sur l'élément
        if (!hover){
            elements[i].addEventListener("mouseleave", function() {
                
                this.setAttribute('style', style)  // On remet le style qu'on a sauvegardé

            });
        }   

        // activation de l'affichage du tableau lorsqu'un pays a ete clique
        // pour cela on utilise la fonction qui a ete cree pour le button 3, avec les bon parametres
        elements[i].addEventListener("mouseover", function() {
            chargerXMLetTransformer('countriesTP.xml', 'infoUnPays.xsl', 'element_a_recuperer', this.getAttribute('id'), 'tableauInfo')
        });
    }
    hover = true;
}

//Question 9
//Button 9: complete the input field of button 3 with an autocomplete function (use a datalist)
function autocompletion(){
    //Iitialisation de la datalist à vide pour éviter que si on clique plusieurs fois sur le bouton, il y a des duplications
    var elem = document.getElementById("DataList");
    elem.innerHTML = "";

    //parcours de la constante datalist et ajout des options d'autucomplétion de la datalist
    for (let i = 0; i<datalist.length; i++){
        elem.innerHTML += '<option value=' + datalist[i].id + '>'; 
    }
}

function offautocompletion(){
    //Vider la datalist
    var elem = document.getElementById("DataList");
    elem.innerHTML = "";
}


//Question 10
//Button 10: complete the information displayed in button 8 with the name of the country's 
//currency (use the site https://restcountries.com/v2/alpha/{code} )

//fonction pour activer l'affichage de la devise
function activercurrency()
{
    var elements = document.querySelectorAll('svg g path');
    //Parcours tous les pays SVG et ajoute un événement sur chacun
    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function() {
            affichercurrency(this.getAttribute('id')); //On mets en paramètre le code du pays, ce sera utile pour la fonction suivante
        });
    }

}

function affichercurrency(code, jsonDocumentUrl = "https://restcountries.com/v2/alpha/")
{
    //Ajuste l'url en fonction du code du pays donné en paramètre
    jsonDocumentUrl += code;
    //Charger le document JSON
    var JsonDoc = chargerHttpJSON(jsonDocumentUrl);
    
    //On extrait la devise
    const currency = JsonDoc.currencies[0].name;

    //Mise à jour du tableau des infos de la question 8
    document.getElementById('ColumnName').innerHTML += "<th> Currency </th>";
    document.getElementById('ColumnData').innerHTML += "<td>" + currency + "</td>";
}




// Question 11
//Color in green on the map the countries where the languages ​​of the country selected in the input field of button 3 are also spoken.
function afficherPaysVertLangue() {
    // on remets la couleur par defaut des pays qui ont ete colorie en vert (dans le cas ou on appuit sur le button de nouveau apres une premiere fois)
    var countries = document.querySelectorAll('svg g path');
    for(var i = 0; i < countries.length; i++) {
        if(countries[i].getAttribute('style') == 'fill:green') countries[i].setAttribute('style', 'fill:')
    }

    var codePays = document.getElementById('countryCodeTextBox').value;
    var XMLDoc = chargerHttpXML('countriesTP.xml'); // chargement du fichier des pays
    var xpathExpr = "//country[country_codes/cca2 = '" + codePays + "']/languages/*";
    var repLangues = XMLDoc.evaluate(xpathExpr, XMLDoc, null, XPathResult.ANY_TYPE, null);

    // recuperation des langues parlees par le pays
    var languages = [];
    var node = repLangues.iterateNext();
    while (node) {
        languages.push(node.textContent);
        node = repLangues.iterateNext();
    }

    for(var i = 0; i < languages.length; i++) {
        var xpathPays = "//country[languages/* = '" + languages[i] + "']/country_codes/cca2"; // xpath pour prendre tous les codes pays qui parlent la langue en question
        var repPays = XMLDoc.evaluate(xpathPays, XMLDoc, null, XPathResult.ANY_TYPE, null);

        var pays = [];
        var node = repPays.iterateNext();
        while (node) {
            //On push tous les pays à mettre en vert
            pays.push(node.textContent);
            node = repPays.iterateNext();
        }
        
        //On parcours une boucle pour mettre en vers tous les pays
        for(var j = 0; j < pays.length; j++) 
            document.getElementById(pays[j]).setAttribute('style', 'fill:green')
        
    }
}

// Question 12
//Button 12: Show a random country name and ask the user to click on the corresponding country on the map. Show : True or False according to the click.
function chargerRandomPays(xmlDocumentUrl, xslDocumentUrl){
    
    //Import des documents xml et xsl
    var xslDocument = chargerHttpXML(xslDocumentUrl);
    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslDocument);
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    

    //Générer un nombre au hasard
    var randomNumber = Math.floor(Math.random()*datalist.length)+1;

    //Appliquer le xsl au xml
    xsltProcessor.setParameter("", "random_number",randomNumber);
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);


    //Afficher le pays qui a été tiré au sort
    var elementHtmlARemplacer = window.document.getElementById("random_pays");
    elementHtmlARemplacer.innerHTML=newXmlDocument.getElementsByTagName('element_a_recuperer')[0].innerHTML;
    
    //on boucle et on parcourt tous les svg des pays pour afficher le résultat si on clique
    var elements = document.querySelectorAll('svg g path');
    for(var i = 0; i < elements.length; i++) 
    
    {
        elements[i].addEventListener("click", function() {
            var name = this.getAttribute('countryname'); //On obtient le nom du pays où l'on clique potentiellement
            if (name == newXmlDocument.querySelectorAll("element_a_recuperer")[0].innerHTML){
                document.getElementById("resultatrandompays").innerHTML = "<span> Gagné! </span>";//Le if est vérifié, c'est le bon pays
            }
            else {
                document.getElementById("resultatrandompays").innerHTML = "<span> Perdu... </span>";//Mauvais pays
            }
        })
    }

    
}



// Question 13 NE MARCHE PAS : affiche les pays en blanc a la place de mettre les drapeau
//Propose an interesting visualization involving the XML file countriesTP.xml , the svg map worldHigh.svg as well 
//as enriched information from web services (for example: geonames, dbpedia, ....)

function afficherDrapeaux() {
    var elements = document.querySelectorAll('svg g path');
    for(let i = 0; i < elements.length; i++) {
        // activation du hover sur les pays
        var style; 
        elements[i].addEventListener("mouseover", function(){
            style = this.getAttribute('style'); // on cree une sauvegarde du style avant de le mettre a jour pour le rendre dans la suite
            var url = 'http://www.geonames.org/flags/x/' + this.getAttribute('id').toLowerCase() + '.gif';
            this.setAttribute('style', 'fill:url(' + url + ')');
            console.log(this.getAttribute('style'));
        })

        // Vérifier que le hover est désactivé à la sortiede la souris
        if (!hover){
            elements[i].addEventListener("mouseleave", function() {
                
                this.setAttribute('style', style)  // On remet le style qu'on a sauvegardé

            });
            
        }   
    }
    hover = true;
}

