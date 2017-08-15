console.log('Hi from geolocation.js');
function iniciar(){
	var boton = document.getElementById('obtener');
	boton.addEventListener('click', obtener, false);
}

function obtener(){
	var geoConfig = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximumAge: 60000
	};
	navigator.geolocation.getCurrentPosition(mostrar, errores, geoConfig);
	//watchPosition se usa para evaluar cambios en la ubicación, sirve en dispositívos móviles
	//var controlUbicacion = navigator.geolocation.watchPosition(mostrar, errores, geoConfig);

}

function mostrar(posicion){
	var ubicacion = document.getElementById('ubicacion');
	var datos = '';
	datos += 'Latitud: ' + posicion.coords.latitude + '<br>';
	datos += 'Longitud: ' + posicion.coords.longitude + '<br>';
	datos += 'Exactitud: ' + posicion.coords.accuracy + 'm.<br>';
	ubicacion.innerHTML = datos;
}

function errores(error){
	alert('Error: ' + error.code + ' ' + error.message);
}


window.addEventListener('load', iniciar, false);