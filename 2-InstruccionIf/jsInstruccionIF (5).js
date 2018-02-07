function Mostrar()
{
//tomo la edad  
	/*if(edad>12 && edad<17){
		
	}
	else{
		alert("No es adolescente");
	}
	*/

	var edad;
	edad = document.getElementById('edad').value;

	if(!(edad>12 && edad<17))
	{
		alert("no es adolescente");
	}
	

}//FIN DE LA FUNCIÓN