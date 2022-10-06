// JavaScript Document
/*
function presentarContenido(){
    
    //Atrapo la url ingresada por el usuario
    var dominio = document.getElementById("recurso").value;
    alert(dominio);

    //Muestro las partes de la respuesta
    fetch(dominio)
    .then(response => {

        //Muestro el codigo de respuesta en la etiqueta con id = codigo
        document.getElementById("codigo").innerHTML = response.status;

        //Muestro el codigo de respuesta como texto en la etiqueta con id = estados
        document.getElementById("estados").innerHTML = response.statusText;

        //Muestro la respuesta en la etiqueta con id = contenidos
        document.getElementById("contenidos").innerHTML = response.responseText;

        //Obtengo la cadena de cabeceras http de respuesta
        response.getAllResponseHeaders();
    })
    //Muestro la cadena de cabeceras http en la etiqueta con id = cabeceras
    .then(headers => document.getElementById("cabeceras").innerHTML = headers);
    

}
*/

function presentarContenido(){

    // Obtener la instancia del objeto XMLHttpRequest
	if (window.XMLHttpRequest) {
		peticion_http = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
	}

    //Capturo el dominio ingresado por el usuario
    var dominio = document.getElementById("recurso").value;
    alert(dominio);

    peticion_http.open('GET',dominio,true);

    peticion_http.onreadystatechange = mostrarContenido();

    function mostrarContenido(){

        if(peticion_http.readyState == 4){
            //aca va el desglose de la respuesta
            document.getElementById("contenidos").innerHTML = peticion_http.responseText;
            document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();
            document.getElementById("estados").innerHTML = peticion_http.statusText;
            document.getElementById("codigo").innerHTML = peticion_http.status;
        }
    }

    peticion_http.send();

}
