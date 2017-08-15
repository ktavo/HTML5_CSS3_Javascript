console.log('Hi from dragAndDrop.js');
function iniciar()
{
	origen1 = document.getElementById('imagen');
	origen1.addEventListener('dragstart', arrastrado, false);
	origen1.addEventListener('dragend', finalizado, false);

	soltar = document.getElementById('cajaSoltar');
	soltar.addEventListener('dragenter', entrando, false);
	soltar.addEventListener('dragleave', saliendo, false);
	soltar.addEventListener('dragover', function(e){e.preventDefault();}, false);
	soltar.addEventListener('drop', soltado, false);
}
function entrando(e)
{
	e.preventDefault();
	soltar.style.background = 'rgba(0,150,0,2)';
}
function saliendo(e)
{
	e.preventDefault();
	soltar.style.background = '#680601';
}
function finalizado(e)
{
	elemento = e.target;
	elemento.style.visibility = 'hidden';
}
function arrastrado(e)
{
	console.log('Inside arrastrado');
	var codigo = '<img class="imagen" src="' + origen1.getAttribute('src')+'">';
	e.dataTransfer.setData('MotoData', codigo);
}
function soltado(e)
{
	e.preventDefault();
	soltar.style.background = '#FFA31A';
	soltar.innerHTML = e.dataTransfer.getData('MotoData');
}
window.addEventListener('load', iniciar, false);