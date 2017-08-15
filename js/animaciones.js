console.log("Hi from animaciones.js");

function iniciar()
{
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	window.addEventListener("mousemove", animacion, false);
}

function animacion(e)
{
	//Limpiar el lienzo
	lienzo.clearRect(0,0,300,500);
	//Capturar posición del ratón
	var xRaton = e.clientX;
	var yRaton = e.clientY;
	//Settear la primera poscición del ojo izq
	var xCentro = 220;
	var yCentro = 150;
	var angulo = Math.atan2(xRaton-xCentro,yRaton-yCentro);
	var x = xCentro + Math.round(Math.sin(angulo)*10);
	var y = yCentro + Math.round(Math.cos(angulo)*10);
	lienzo.beginPath();
	lienzo.arc(xCentro, yCentro, 20, 0, Math.PI*2, false);
	lienzo.moveTo(xCentro + 70, 150);
	lienzo.arc(xCentro + 50, 150, 20, 0, Math.PI*2, false);
	lienzo.stroke();
	lienzo.beginPath();
	lienzo.moveTo(x+10, y);
	lienzo.arc(x,y,10,0, Math.PI*2, false);
	lienzo.moveTo(x+60,y);
	lienzo.arc(x+50, y, 10, 0, Math.PI*2, false);
	lienzo.fill();
}
window.addEventListener("load", iniciar, false);
