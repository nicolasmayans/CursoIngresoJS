function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	/*if(edad>17)
	{
		alert("Es mayor de edad");
	}
	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}
	if(edad<13)
	{
		alert("Es niño");
	}
	*/
	//forma correcta con else con la opción de usar el microprocesador una o tres veces
		if(edad<13)
		{
			alert("niño");
		}
		else
		{
			if(edad>18)
			{
				alert("mayor");
			}
			else
			{
				alert("adolescente");
			}
		}

	

}//FIN DE LA FUNCIÓN