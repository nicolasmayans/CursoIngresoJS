/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//esto es un comentario//
	//alert("anda");//
	//toda linea de instrucción termina con ";"
	var nombre;
	/*
	esto es un bloque
	
	alert("nombre");
	alert(nombre);
	nombre = "Nicolás"
	alert(nombre);
	*/
	nombre = prompt("ingrese su nombre","natalia natalia");
	//var person = prompt("Please enter your name", "Harry Potter");
	alert(nombre);

	alert("su nombre es: " + nombre);
}

