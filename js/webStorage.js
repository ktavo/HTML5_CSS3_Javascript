function iniciar(){
	var boton = document.getElementById('grabar');
	boton.addEventListener('click', nuevoItem, false);
}

function nuevoItem(){
	var clave = document.getElementById('clave').value;
	var valor = document.getElementById('texto').value;
	//console.log('clave: ' + clave);
	//console.log('valor: ' + valor);
	//sessionStorage.setItem(clave, valor);
	sessionStorage[clave] = valor;
	mostrar(clave);
}

function mostrar(clave){
	var cajaDatos = document.getElementById('cajaDatos');
	cajaDatos.innerHTML = '';
	//var valor = sessionStorage.getItem(clave);
	for (var i = 0; i <= sessionStorage.length; i++) 
	{
		var clave = sessionStorage.key(i);
		var valor = sessionStorage.getItem(clave);
		cajaDatos.innerHTML += '<div>' + clave + ' - ' + valor + '</div>';
	}
}
window.addEventListener('load', iniciar, false);