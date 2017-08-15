console.log('Hi from dragAndDrop2.js');
function iniciar(){
	var imagenes = document.querySelectorAll('#cajaImagenes > img');
	for (var i=0; i<imagenes.length; i++)
	{
		imagenes[i].addEventListener('dragstart', arrastrado, false);
		imagenes[i].addEventListener('dragend', finalizado, false);
	}
	soltar = document.getElementById('lienzo');
	lienzo = soltar.getContext('2d');
	soltar.addEventListener('dragenter', function(e){e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}

function arrastrado(e){
	elemento = e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
	e.dataTransfer.setDragImage(e.target, 40, 40);
}

function soltado(e){
	e.preventDefault();
	var img = e.dataTransfer.getData('Text');
	var elemento = document.getElementById(img);
	var posX = e.pageX - (40 + soltar.offsetLeft);
	var posY = e.pageY - (40 + soltar.offsetTop);
	lienzo.drawImage(elemento, posX, posY);
}

function finalizado(e){
	elemento = e.target;
	elemento.style.visibility = "hidden";
}
window.addEventListener('load', iniciar, false);