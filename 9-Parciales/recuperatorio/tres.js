function Mostrar()
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;
	var promedio;

	preciouno = document.getElementById('precioUno').value;
	preciodos = document.getElementById('precioDos').value;
	preciotres = document.getElementById('precioTres').value;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);

	suma = preciouno + preciodos + preciotres;
	promedio = suma/3;

	alert("La suma de los tres precios es " + suma);
	alert("El promedio es " + promedio);
}
