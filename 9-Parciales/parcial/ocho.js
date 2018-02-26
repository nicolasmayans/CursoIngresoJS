/*
ingreso de alumnos
no sabemos cuantos alumnos hay
pedimos el nombre
quiero averiguar cuantos alumnos ingrese
document.write diciendo se ingresaron tantos alumnos
promedio total
cantidad de varones y mujeres
cantidad de varones desaprobados
nombre de la mejor nota
promedio de las mujeres
sexo del menor edad
promedio de las edades de los aprobados(177/6)
cantidad de notas pares(4)
cantidad de notas impares(3)

maria 10 20
jose 0 30
gabriela 2 40
martin 5 17
edi 6 30
axel 9 40
flor 0 25
lucas 4 33
lidia 7 37
*/


function Mostrar()
{
	var alumnos;
	var nombre;
	var respuesta;
	var nota;
	var sumanota;
	var promedio;
	var sexo;
	var varones;
	var mujeres;
	var edad;
	var varonesdesap;
	var mejornota;
	var promediomujeres;
	var sexomenor;
	var promedadesaprobados;
	var notaspares;
	var cantmujeres;
	var cantvarones;
	var nombremax;

	alumnos = 0;
	respuesta = " ";
	sumanota = 0;
	cantvarones = 0;
	cantmujeres = 0;
	varonesdesap = 0;
	mejornota = 0;
	promediomujeres = 0;

	while(respuesta != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno");
		nota = prompt("Ingrese nota del alumno");
		edad = prompt("Ingrese la edad del alumno");
		sexo = prompt("sexo del alumno");
		nota = parseInt(nota);
		edad = parseInt(edad);

		while(nota<0 || nota>10)
		{
			nombre = prompt("Ingrese el nombre del alumno");
			nota = prompt("Ingrese nota del alumno");
		}
		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt("sexo del alumno");
		}
		if(sexo=="f")
		{
			cantmujeres = cantmujeres + 1;
		}
		if(sexo=="m")
		{
			cantvarones = cantvarones + 1;
		}
		if(sexo=="m")
		{
			if(nota<4)
			{
				varonesdesap = varonesdesap + 1;
			}
		}
		if(nota>mejornota)
		{
			mejornota = nota;
			nombremax = nombre;
		}

		if(sexo=="f")
		{
			promediomujeres = promediomujeres + nota;
		}


		sumanota = sumanota + nota;
		alumnos = alumnos + 1;
		respuesta = prompt("NO para salir");
		promedio = sumanota / alumnos;
		promediomujeres = promediomujeres / mujeres;
	}
	document.write("son " + alumnos + "alumnos con promedio de " + promedio);
	document.write("cantidad de varones " + cantvarones);
	document.write("cantidad de mujeres " + cantmujeres);
	document.write("varones desaprobados " + varonesdesap);
	document.write("La mejor nota la tiene el alumno " + nombremax);
	document.write(" El promedio de las mujeres es " + promediomujeres);


}
