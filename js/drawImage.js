console.log("Hi from drawImage.js");

function iniciar()
{
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	var imagen = new Image();
	imagen.src = 'images/yamahaR3.jpg';
	imagen.addEventListener('load', function(){
		lienzo.drawImage(imagen,0,0, elemento.width, elemento.height);
	}, false);
}
window.addEventListener("load", iniciar, false);


function iniciar2()
{
	var elemento2 = document.getElementById('lienzo2');
	lienzo2 = elemento2.getContext('2d');
	var imagen2 = new Image();

	imagen2.src = 'images/yamahaR3.jpg';
	//imagen2.crossOrigin = "Anonymous"; 

	imagen2.addEventListener("load", modificarImagen, false);
}

function modificarImagen(e)
{
	imagen2 = e.target;
	lienzo2.drawImage(imagen2,0,0);
	var info = lienzo2.getImageData(0,0,200,262);
	var pos;
	for (var x=0;x<=200;x++)
	{
		for (var y=0;y<=262;y++)
		{
			pos = (info.width*4*y) + (x*4);
			info.data[pos] = 255-info.data[pos];
			info.data[pos+1] = 255-info.data[pos+1];
			info.data[pos+2] = 255-info.data[pos+2];
		}
	}
	console.log('info: ' + info);
	lienzo2.putImageData(info,0,0);
}
window.addEventListener("load", iniciar2, false);


function iniciar3()
{
	var elemento3 = document.getElementById('lienzo3');
	lienzo3 = elemento3.getContext('2d');

	lienzo3.fillStyle = "rgb(255,0,0)";
	lienzo3.fillRect(20,20, 100, 100);

	lienzo3.fillStyle = "rgb(0,255,0)";
	lienzo3.fillRect(60,60,140,140);

	lienzo3.fillStyle = "rgb(0,0,255)";
	lienzo3.fillRect(100,100,180,180);

	var dataURL = elemento3.toDataURL();
	document.getElementById("imageURL").value = dataURL;
	window.open(dataURL, "toDataURL() lienzo3", "width=600, height=200");
}
window.addEventListener("load", iniciar3, false);

function iniciar4()
{
	var elemento4 = document.getElementById('lienzo4');
	lienzo4 = elemento4.getContext('2d');

	var imagen4 = new Image();
	imagen4.src = 'images/bikePattern.png'; 
	imagen4.addEventListener("load", modificarImagen4, false);
}

function modificarImagen4(e4)
{
	imagen4 = e4.target;
	var patron = lienzo.createPattern(imagen4, 'repeat');

	lienzo4.fillStyle = patron;
	lienzo4.fillRect(0,0,500,300);
}
window.addEventListener("load", iniciar4, false);
