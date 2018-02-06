/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	/*
		Forma correcta: creo variables, traigo los datos del ID, los transformo, sumo las variables
		luego muestro el alert.
	*/
		var numerouno;
		var numerodos;
		var suma;

		numerouno = document.getElementById('numeroUno').value;	
		numerodos = document.getElementById('numeroDos').value;

		numerouno = parseInt(numerouno);
		numerodos = parseInt(numerodos);

		suma = numerouno + numerodos;

		alert("El resultado de la suma es " + suma);
	/*
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;
	
	numerodos = document.getElementById('numeroDos').value;

	suma = (parseInt(numerouno)) + (parseInt(numerodos));
	
	alert("El resultado de la suma es " + suma);
	*/
}