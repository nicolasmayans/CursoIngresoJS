
function Mostrar()
{
	var base;
	var superficie;
	var perimCuadrado;
	base = 0;
	perimCuadrado = 0;
	superficie = 0;
	base = document.getElementById('laBase').value;
	perimCuadrado = base * 4;
	superficie = base * base;
	alert("El perímetro del cuadrado es " + perimCuadrado);
	alert("La superficie es " + superficie);
}
