console.log("Hi from canvasTextExample.js");
function iniciar()
{
	var elemento = document.getElementById("lienzo");
	lienzo = elemento.getContext("2d");
	lienzo.shadowColor = "#070";
	lienzo.shadowOffsetX = 4;
	lienzo.shadowOffsetY = 4;
	lienzo.shadowBlur = 7;
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.textAlign = "start";
	lienzo.baseline = "bottom";
	var textVariable = "Pista pista pista"; 
	lienzo.fillText("Ancho: " + lienzo.measureText(textVariable).width, 5, 30);
	lienzo.fillText(textVariable, 100, 125);
}
window.addEventListener("load", iniciar, false);