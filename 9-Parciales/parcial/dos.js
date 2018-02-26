//precio y porcentaje de descuento que se va hacer.

function Mostrar()
{
  var valor;
  var descuento;
  var resultado;
  valor= 0;
  descuento= 0;
  valor = prompt("Ingrese el valor");
  descuento = prompt("Ingrese el descuento");
  descuento = descuento * valor/100;
  resultado = valor - descuento;
  document.getElementById('importeFinal').value = resultado;
}
