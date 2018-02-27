// ingresar dos datos una letra y un número, los números van a estar entre -50 y +50, informar el promedio de los números
//positivos, la cantidad de los números impares, la suma de todos los números cuya letra haya sido una vocal, el número
//máximo y la letra con la cuál fue ingresado.

//cantidad de impares numero %2 !=0
// suma de letras vocal if letra =="a" || letra =="b" etc,

function Mostrar()
{
	var letra;
	var numero;
	var promPosit;
	var cantPosit;
	numero=parseInt(numero);
	promPosit=parseInt(promPosit);
	cantPosit = 0;
	promPosit = 0;


	while(letra!=="no")
	{
		letra = prompt("Ingrese una letra");
		while(!isNaN(letra))
		{
			letra = prompt("Ingrese una letra");
		}
		numero = prompt("Ingrese un numero entre -50 y 50");

		//numero< -50 || numero > 50 || isNaN(numero)
		if(numero>=0)
		{
			promPosit = promPosit + numero;
			cantPosit = cantPosit + 1;
			promPosit = promPosit / cantPosit;
			
		}

		letra = prompt("¿Desea seguir cargando?");
	}
	alert("El promedio de los números positivos es " + promPosit);
}
