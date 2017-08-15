console.log("Hi from canvasExample.js");
function iniciar()
{
	
	var elemento = document.getElementById("lienzo");
	lienzo = elemento.getContext('2d');
	lienzo.fillStyle = "#009";
	lienzo.strokeStyle = "#900"; 
	lienzo.globalAlpha = 0.5;
	lienzo.strokeRect(100,100,120,120);
	lienzo.fillRect(110,110,100,100);
	lienzo.clearRect(120,120,80,80);

	var elemento2 = document.getElementById("lienzo2");
	lienzo2 = elemento2.getContext('2d');
	var gradiente = lienzo2.createLinearGradient(0,0,10,100);
	gradiente.addColorStop(0.5, '#00F');
	gradiente.addColorStop(1, '#000');
	lienzo2.fillStyle = gradiente;
	lienzo2.fillRect(10,10,100,100);
	lienzo2.fillRect(150,10,200,100);

	var elemento3 = document.getElementById("lienzo3");
	lienzo3 = elemento3.getContext('2d');
	lienzo3.beginPath();
	lienzo3.moveTo(100,100);
	lienzo3.lineTo(200,200);
	lienzo3.lineTo(100,200);	
	lienzo3.closePath();
	//lienzo3.stroke();
	lienzo3.fill();

	var elemento4 = document.getElementById("lienzo4");
	lienzo4 = elemento4.getContext('2d');
	lienzo4.beginPath();
	lienzo4.moveTo(100,100);
	lienzo4.lineTo(200,200);
	lienzo4.lineTo(100,200);
	lienzo4.clip();
	lienzo4.beginPath();
	for (var i = 0; i < 300; i=i+10)
	{
		lienzo4.moveTo(0,i);
		lienzo4.lineTo(500,i);
	};
	lienzo4.stroke();

	var elemento5 = document.getElementById("lienzo5");
	lienzo5 = elemento5.getContext('2d');
	lienzo5.beginPath();
	lienzo5.arc(100,100,50,0, Math.PI*2, false);
	lienzo5.stroke();

	var elemento6 = document.getElementById("lienzo6");
	lienzo6 = elemento6.getContext('2d');
	lienzo6.beginPath();
	lienzo6.moveTo(50,50);
	lienzo6.quadraticCurveTo(100,125,50,200);
	lienzo6.moveTo(250,50);
	lienzo6.bezierCurveTo(200,125,300,125,250,200);
	lienzo6.stroke();
}
window.addEventListener("load", iniciar, false);