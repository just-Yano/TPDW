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
}

// Question 5
function rendreSVG1cliquable() {
    var elements = document.querySelectorAll('#lesFormes g *')

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            console.log(this.getAttribute('title'))
            document.getElementById('titreObjetImage').innerHTML = this.getAttribute('title')
        })
    }
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

//Question 9

function autocompletion(){
    const datalist = [{id:"AD"},{id:"AE"},{id:"AF"},{id:"AG"},{id:"AI"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AS"},{id:"AT"},{id:"AU"},{id:"AW"},{id:"AX"},{id:"AZ"},{id:"BA"},{id:"BB"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BH"},{id:"BI"},{id:"BJ"},{id:"BL"},{id:"BN"},{id:"BO"},{id:"BM"},{id:"BQ"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BV"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CC"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CK"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CV"},{id:"CW"},{id:"CX"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DM"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EG"},{id:"EE"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FI"},{id:"FJ"},{id:"FK"},{id:"FM"},{id:"FO"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GD"},{id:"GF"},{id:"GG"},{id:"GH"},{id:"GI"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GO"},{id:"GP"},{id:"GQ"},{id:"GR"},{id:"GS"},{id:"GT"},{id:"GU"},{id:"GW"},{id:"GY"},{id:"HK"},{id:"HM"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IM"},{id:"IN"},{id:"IO"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JE"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"JU"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KI"},{id:"KM"},{id:"KN"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KY"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LC"},{id:"LI"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MC"},{id:"MD"},{id:"MG"},{id:"ME"},{id:"MF"},{id:"MH"},{id:"MK"},{id:"ML"},{id:"MO"},{id:"MM"},{id:"MN"},{id:"MP"},{id:"MQ"},{id:"MR"},{id:"MS"},{id:"MT"},{id:"MU"},{id:"MV"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NF"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NR"},{id:"NU"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PF"},{id:"PG"},{id:"PH"},{id:"PK"},{id:"PL"},{id:"PM"},{id:"PN"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PW"},{id:"PY"},{id:"QA"},{id:"RE"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SC"},{id:"SD"},{id:"SE"},{id:"SG"},{id:"SH"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SM"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"ST"},{id:"SV"},{id:"SX"},{id:"SY"},{id:"SZ"},{id:"TC"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TK"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TO"},{id:"TR"},{id:"TT"},{id:"TV"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"UM-DQ"},{id:"UM-FQ"},{id:"UM-HQ"},{id:"UM-JQ"},{id:"UM-MQ"},{id:"UM-WQ"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VA"},{id:"VC"},{id:"VE"},{id:"VG"},{id:"VI"},{id:"VN"},{id:"VU"},{id:"WF"},{id:"WS"},{id:"YE"},{id:"YT"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];
    var elem = document.getElementById("DataList");
    elem.innerHTML = "";
    for (let i = 0; i<datalist.length; i++){
        elem.innerHTML += '<option value=' + datalist[i].id + '>'; 
    }
}

function offautocompletion(){
    const datalist = [{id:"AD"},{id:"AE"},{id:"AF"},{id:"AG"},{id:"AI"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AS"},{id:"AT"},{id:"AU"},{id:"AW"},{id:"AX"},{id:"AZ"},{id:"BA"},{id:"BB"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BH"},{id:"BI"},{id:"BJ"},{id:"BL"},{id:"BN"},{id:"BO"},{id:"BM"},{id:"BQ"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BV"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CC"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CK"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CV"},{id:"CW"},{id:"CX"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DM"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EG"},{id:"EE"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FI"},{id:"FJ"},{id:"FK"},{id:"FM"},{id:"FO"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GD"},{id:"GF"},{id:"GG"},{id:"GH"},{id:"GI"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GO"},{id:"GP"},{id:"GQ"},{id:"GR"},{id:"GS"},{id:"GT"},{id:"GU"},{id:"GW"},{id:"GY"},{id:"HK"},{id:"HM"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IM"},{id:"IN"},{id:"IO"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JE"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"JU"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KI"},{id:"KM"},{id:"KN"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KY"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LC"},{id:"LI"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MC"},{id:"MD"},{id:"MG"},{id:"ME"},{id:"MF"},{id:"MH"},{id:"MK"},{id:"ML"},{id:"MO"},{id:"MM"},{id:"MN"},{id:"MP"},{id:"MQ"},{id:"MR"},{id:"MS"},{id:"MT"},{id:"MU"},{id:"MV"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NF"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NR"},{id:"NU"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PF"},{id:"PG"},{id:"PH"},{id:"PK"},{id:"PL"},{id:"PM"},{id:"PN"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PW"},{id:"PY"},{id:"QA"},{id:"RE"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SC"},{id:"SD"},{id:"SE"},{id:"SG"},{id:"SH"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SM"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"ST"},{id:"SV"},{id:"SX"},{id:"SY"},{id:"SZ"},{id:"TC"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TK"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TO"},{id:"TR"},{id:"TT"},{id:"TV"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"UM-DQ"},{id:"UM-FQ"},{id:"UM-HQ"},{id:"UM-JQ"},{id:"UM-MQ"},{id:"UM-WQ"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VA"},{id:"VC"},{id:"VE"},{id:"VG"},{id:"VI"},{id:"VN"},{id:"VU"},{id:"WF"},{id:"WS"},{id:"YE"},{id:"YT"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];
    var elem = document.getElementById("DataList");
    elem.innerHTML = "";
}

