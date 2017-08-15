console.log('Hi from dragAndDrop2.js');
function iniciar(){
	var imagenes = document.querySelectorAll('#cajaImagenes > img');
	for (var i=0; i<imagenes.length; i++)
	{
		imagenes[i].addEventListener('dragstart', arrastrado, false);
	}
	soltar = document.getElementById('cajaSoltar');
	soltar.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	soltar.addEventListener('drop', soltado, false);
}

function arrastrado(e){
	elemento = e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltado(e){
	e.preventDefault();
	var id=e.dataTransfer.getData('Text');
	if(id != 'imagen3')
	{
		var src = document.getElementById(id).src;
		soltar.innerHTML = '<img class="moto" src="' + src + '">';
	}
	else
	{
		soltar.innerHTML = '<h2 style="color: red;">Esta imagen no es admitida</h2>';
	}
}
window.addEventListener('load', iniciar, false);