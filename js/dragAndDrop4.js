console.log('Hi from dragAndDrop4.js');
function iniciar(){
	soltar = document.getElementById('cajaSoltar');
	soltar.addEventListener('dragenter', function(e){e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}

function soltado(e){
	e.preventDefault();
	var archivos = e.dataTransfer.files;
	var lista = '';
	for (var i=0; i<archivos.length; i++)
	{
		lista += 'Archivo: ' + archivos[i].name + ' ' + (archivos[i].size) + ' bytes<br>';
		total = archivos.length;
	}
	soltar.innerHTML = lista + '<br /> Total: ' + total; 
}
window.addEventListener('load', iniciar, false);