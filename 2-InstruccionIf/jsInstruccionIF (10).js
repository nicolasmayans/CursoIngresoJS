function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var numeroaleatorio
	numeroaleatorio = Math.floor(Math.random()*(0,11));
	
	if(numeroaleatorio>8){
		alert("Excelente");
	}
	else
	{
		if(numeroaleatorio>3 && numeroaleatorio<9){
			alert("Aprobó");
		}else{
			alert("Vamos la próxima se puede");
		}
	}
	

}//FIN DE LA FUNCIÓN