/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;	
	numerodos = document.getElementById('numeroDos').value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	suma = numerouno + numerodos;	
	alert("El resultado de la suma es " + suma);	
}

function restar()
{
	var numerouno;
	var numerodos;
	var resta;

	numerouno = document.getElementById('numeroUno').value;	
	numerodos = document.getElementById('numeroDos').value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resta = numerouno - numerodos;	
	alert("El resultado de la resta es " + resta);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var multi;

	numerouno = document.getElementById('numeroUno').value;	
	numerodos = document.getElementById('numeroDos').value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	multi = numerouno * numerodos;
	alert("El resultado de la multiplicación es " + multi);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var division;

	numerouno = document.getElementById('numeroUno').value;	
	numerodos = document.getElementById('numeroDos').value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	division = numerouno / numerodos;	
	alert("El resultado de la division es " + division);
}

