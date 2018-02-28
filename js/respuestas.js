// ===============================================
// ==< Declaración de variables >=================
// ===============================================
var url="https://rawgit.com/Pimpollo21/repositoriodepruebas2/master/xml/respuestas.xml";
var respuestaSelect=null;
var respuestasCheckbox = [];
var nota = 0;

var xhttp = new XMLHttpRequest();

// ===============================================
// ==< Declaración de funciones >=================
// ===============================================
//
// ====================================
// ==< Función a realizar al cargar >==
// ==< la página                    >==
// ====================================
window.onload = function()
{ 
		xhttp.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				gestionarXml(this); 
			}
		}
		;
	
		xhttp.open("GET", "https://rawgit.com/Pimpollo21/repositoriodepruebas2/master/xml/respuestas.xml", true); 
		xhttp.send();
		// ============================
		// ==< Obtener respuestas >====
		// ============================
		function gestionarXml(dadesXml)
			{
				var xmlDoc = dadesXml.responseXML;
				document.getElementById("question1").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer1").innerHTML    = xmlDoc.getElementsByTagName("answer1")[0].childNodes[0].nodeValue;
				
				document.getElementById("question2").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer2").innerHTML    = xmlDoc.getElementsByTagName("answer2")[1].childNodes[1].nodeValue;
				
				document.getElementById("question3").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer3").innerHTML    = xmlDoc.getElementsByTagName("answer")[2].childNodes[2].nodeValue;
				
				document.getElementById("question4").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer4").innerHTML    = xmlDoc.getElementsByTagName("answer")[3].childNodes[3].nodeValue;
				
				document.getElementById("question5").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer5").innerHTML    = xmlDoc.getElementsByTagName("answer")[4].childNodes[4].nodeValue;
				
				document.getElementById("question6").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer1").innerHTML    = xmlDoc.getElementsByTagName("answer")[5].childNodes[5].nodeValue;
				
				document.getElementById("question7").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer7").innerHTML    = xmlDoc.getElementsByTagName("answer")[6].childNodes[6].nodeValue;
				
				document.getElementById("question8").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer8").innerHTML    = xmlDoc.getElementsByTagName("answer")[7].childNodes[7].nodeValue;
				
				document.getElementById("question9").innerHTML  = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer9").innerHTML    = xmlDoc.getElementsByTagName("answer")[8].childNodes[8].nodeValue;
				
				document.getElementById("question10").innerHTML = xmlDoc.getElementsByTagName("text").childNodes;
				document.getElementById("answer10").innerHTML   = xmlDoc.getElementsByTagName("answer")[9].childNodes[9].nodeValue;	
				
			}

}
;
