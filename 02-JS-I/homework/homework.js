// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  
  return (str);
}
var nombreAlumno= "Rebeca";  
devolverString(nombreAlumno);

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x+y;
  return suma;
}
suma(2,1);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta= x-y;
  return resta;
}
resta(2-1);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplica= x*y;
  return multiplica;
}
multiplica(2,7);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divide= x/y;
  return divide;
}
divide(7,2);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x==y){
    return true;
  }
    return false;
}
sonIguales(8,9);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length==str2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud("Rebeca","Henry");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return true;
  }
  return false;
}
menosQueNoventa(25);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    return true;
  }
  return false;
}
mayorQueCincuenta(75);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var obtenerResto=x%y;
  return obtenerResto;
}
obtenerResto(5,2);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==0){
    return true;
  }
  return false;
}
esPar(2);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2!==0){
    return true;
  }
  return false;
}
esImpar(5);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var elevarAlCuadrado=num*num;
  return elevarAlCuadrado;
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevarAlCubo=num*num*num;
  return elevarAlCubo;
}
elevarAlCubo(4);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevar= num**exponent;
  return elevar;
}
elevar(2,4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondearNumero=Math.round(num);
  return redondearNumero;
}
redondearNumero(4.2);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondearHaciaArriba=Math.ceil(num);
  return redondearHaciaArriba;
}
redondearHaciaArriba(3.333);

function numeroRandom() {
  return Math.random()
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero>0){
    return ("Es positivo");
  }
  if(numero<0){
    return ("Es negativo");
  }
  if (numero==0){
    return false;
  }
}
esPositivo(5);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str+"!";
}
var nombre="Rebeca";
agregarSimboloExclamacion(nombre);

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinarNombres= nombre+" "+apellido;
  return combinarNombres;
}
combinarNombres("Soy", "Henry");


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var obtenerSaludo= "Hola" + " " + nombre+"!";
  return obtenerSaludo;
}
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var obtenerAreaRectangulo= alto*ancho;
  return (obtenerAreaRectangulo);
}
obtenerAreaRectangulo(3,5);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var retornarPerimetro=lado*4;
  return retornarPerimetro;
}
//var x= 2;
retornarPerimetro(2);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areaDelTriangulo= ((base*altura)/2);
  return areaDelTriangulo;
}
areaDelTriangulo(2,4);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var deEuroAdolar= euro*1.20;
  return deEuroAdolar;
}
deEuroAdolar(10);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  var v1= "a";
  var v2= "e";
  var v3= "i";
  var v4= "o";
  var v5= "u";
  if (letra.length>1){
    return ("Dato incorrecto");
  }
  if(letra==v1|letra==v2||letra==v3||letra==v4||letra==v5){
    return ("Es vocal");
  }
  return ("Dato incorrecto");
}
var y= "e";
esVocal(y);



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
