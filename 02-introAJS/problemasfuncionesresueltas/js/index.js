var numero = prompt("Introduce un numero entero");

var resultado = numeroImpar(numero);
alert("El numero " + numero + es + resultado);

function numeroImpar(numero) {
    if(numero % 2 ==0){
        return "par";
    }
    else{
        return "impar";
    }
}
var resultado = numeroImpar(numero);
alert ("El numero" + numero + "es" + resultado);