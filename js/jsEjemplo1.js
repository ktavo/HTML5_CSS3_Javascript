console.log('hi from away script');
function mostrarAlerta2()
{
	alert('you clicked me the third button');
}
function hacerClick2()
{
	var buttonElement = document.getElementById('button3');
	buttonElement.addEventListener('click',mostrarAlerta2, false);
}
//window.onLoad = hacerClick2;
window.addEventListener('load', hacerClick2, false);


function hacerClick3()
{
	document.querySelector('#principal').onClick = mostrarAlerta3();
}
function mostrarAlerta3()
{
	alert('clicked by query selector');
}
window.onLoad=hacerClick3;

