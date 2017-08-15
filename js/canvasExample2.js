console.log("Hi from canvasExample2.js");

function iniciar()
{
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.fillStyle = "#900";
	lienzo.fillRect(100, 100, 300, 100);
	lienzo.fillStyle = "#AAF";
	lienzo.font = "bold 80px verdana, sans-serif";
	lienzo.textAlign = "center";
	lienzo.textBaseline = "middle";
	//lienzo.save();
	//lienzo.translate(50,70);	
	lienzo.fillText("Prueba1", 250, 110);
}
window.addEventListener("load", iniciar, false);

function iniciar2()
{
	var elemento2 = document.getElementById('lienzo2');
	lienzo2 = elemento2.getContext('2d');
	lienzo2.fillStyle = "#900";
	lienzo2.fillRect(100, 100, 300, 100);
	lienzo2.globalCompositeOperation = "source-in";
	lienzo2.fillStyle = "#AAF";
	lienzo2.font = "bold 80px verdana, sans-serif";
	lienzo2.textAlign = "center";
	lienzo2.textBaseline = "middle";
	lienzo2.fillText("Prueba2", 250, 110);
}
window.addEventListener("load", iniciar2, false);

function iniciar3()
{
	var elemento3 = document.getElementById('lienzo3');
	lienzo3 = elemento3.getContext('2d');
	lienzo3.fillStyle = "#900";
	lienzo3.fillRect(100, 100, 300, 100);
	lienzo3.globalCompositeOperation = "source-out";
	lienzo3.fillStyle = "#AAF";
	lienzo3.font = "bold 80px verdana, sans-serif";
	lienzo3.textAlign = "center";
	lienzo3.textBaseline = "middle";
	lienzo3.fillText("Prueba3", 250, 110);
}
window.addEventListener("load", iniciar3, false);

function iniciar4()
{
	var elemento4 = document.getElementById('lienzo4');
	lienzo4 = elemento4.getContext('2d');
	lienzo4.fillStyle = "#900";
	lienzo4.fillRect(100, 100, 300, 100);
	lienzo4.globalCompositeOperation = "source-atop";
	lienzo4.fillStyle = "#AAF";
	lienzo4.font = "bold 80px verdana, sans-serif";
	lienzo4.textAlign = "center";
	lienzo4.textBaseline = "middle";
	lienzo4.fillText("Prueba4", 250, 110);
}
window.addEventListener("load", iniciar4, false);

function iniciar5()
{
	var elemento5 = document.getElementById('lienzo5');
	lienzo5 = elemento5.getContext('2d');
	lienzo5.fillStyle = "#900";
	lienzo5.fillRect(100, 100, 300, 100);
	lienzo5.globalCompositeOperation = "lighter";
	lienzo5.fillStyle = "#AAF";
	lienzo5.font = "bold 80px verdana, sans-serif";
	lienzo5.textAlign = "center";
	lienzo5.textBaseline = "middle";
	lienzo5.fillText("Prueba5", 250, 110);
}
window.addEventListener("load", iniciar5, false);

function iniciar6()
{
	var elemento6 = document.getElementById('lienzo6');
	lienzo6 = elemento6.getContext('2d');
	lienzo6.fillStyle = "#900";
	lienzo6.fillRect(100, 100, 300, 100);
	lienzo6.globalCompositeOperation = "destination-over";
	lienzo6.fillStyle = "#AAF";
	lienzo6.font = "bold 80px verdana, sans-serif";
	lienzo6.textAlign = "center";
	lienzo6.textBaseline = "middle";
	lienzo6.fillText("Prueba6", 250, 110);
}
window.addEventListener("load", iniciar6, false);

function iniciar7()
{
	var elemento7 = document.getElementById('lienzo7');
	lienzo7 = elemento7.getContext('2d');
	lienzo7.fillStyle = "#900";
	lienzo7.fillRect(100, 100, 300, 100);
	lienzo7.fillStyle = "#AAF";
	lienzo7.font = "bold 80px verdana, sans-serif";
	lienzo7.textAlign = "center";
	lienzo7.textBaseline = "middle";
	lienzo7.fillText("Prueba7", 250, 110);
	lienzo7.globalCompositeOperation = "destination-in";
	lienzo7.fillStyle = "#272";
	lienzo7.fillRect(50, 20, 100, 250);

}
window.addEventListener("load", iniciar7, false);

function iniciar8()
{
	var elemento8 = document.getElementById('lienzo8');
	lienzo8 = elemento8.getContext('2d');
	lienzo8.fillStyle = "#900";
	lienzo8.fillRect(100, 100, 300, 100);
	lienzo8.globalCompositeOperation = "destination-out";
	lienzo8.fillStyle = "#AAF";
	lienzo8.font = "bold 80px verdana, sans-serif";
	lienzo8.textAlign = "center";
	lienzo8.textBaseline = "middle";
	lienzo8.fillText("Prueba8", 250, 110);
}
window.addEventListener("load", iniciar8, false);

function iniciar9()
{
	var elemento9 = document.getElementById('lienzo9');
	lienzo9 = elemento9.getContext('2d');
	lienzo9.fillStyle = "#900";
	lienzo9.fillRect(100, 100, 300, 100);
	lienzo9.globalCompositeOperation = "destination-atop";
	lienzo9.fillStyle = "#AAF";
	lienzo9.font = "bold 80px verdana, sans-serif";
	lienzo9.textAlign = "center";
	lienzo9.textBaseline = "middle";
	lienzo9.fillText("Prueba9", 250, 110);
}
window.addEventListener("load", iniciar9, false);

//darker funciona en opera y android
function iniciar10()
{
	var elemento10 = document.getElementById('lienzo10');
	lienzo10 = elemento10.getContext('2d');
	lienzo10.fillStyle = "#900";
	lienzo10.fillRect(100, 100, 300, 100);
	lienzo10.globalCompositeOperation = "darker";
	lienzo10.fillStyle = "#AAF";
	lienzo10.font = "bold 80px verdana, sans-serif";
	lienzo10.textAlign = "center";
	lienzo10.textBaseline = "middle";
	lienzo10.fillText("Prueba10", 250, 110);
}
window.addEventListener("load", iniciar10, false);