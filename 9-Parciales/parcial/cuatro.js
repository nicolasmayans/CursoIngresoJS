//ingresar tres numeros e informar cual es el mayor y menor de los tres

function Mostrar()
{
	var uno;
	var dos;
	var tres;

	uno = 0;
	dos = 0;
	tres = 0;

	uno= prompt("Ingrese el valor del primer número");
	dos= prompt("Ingrese el valor del segundo número");
	tres= prompt("Ingrese el valor del tercer número");

	if(uno>dos && uno>tres)
	{
		alert("El valor mayor es " + uno);		
	}
	else if(dos>tres)
	{
		alert("El valor mayor es " + dos);
	}else
	{
		alert("El valor mayor es " + tres);
	}

	if(uno<dos && uno<tres)
	{
		alert("El valor menor es " + uno);		
	}
	else if(dos<tres)
	{
		alert("El valor menor es " + dos);
	}else
	{
		alert("El valor menor es " + tres);
	}


}
