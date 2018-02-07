function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	if (edad>17){
		alert("es mayor de edad");
	}

	else (edad<18){
		alert("es menor de edad");
	}

/*	
	Acá se usa el microprocesador dos veces
	if (edad>17){
		alert("es mayor de edad");
	}

	if (edad<18){
		alert("es menor de edad");
	}
*/


}//FIN DE LA FUNCIÓN