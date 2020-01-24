## Arreglos
Un arreglo es una colección de objetos.
Lo definimos así:
var arr = [5, 4, 3, 2, 1];
console.log(arr);
arr.reverse(); // le da la vuelta al vector
console.log(arr);

//funcion para hallar el cuadrado
arr = arr.map(function(elem) {
    elem *= elem;
    return elem;
});
console.log(arr);

arr = arr.map(Math.sqrt); // saca la raiz cuadrada
console.log(arr);

arr = arr.join("|"); // convierte el arreglo en un string
console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push("6"); //mete el valor a la ultima posicion del arreglo
console.log(arr);

arr.unshift("0"); //mete el valor a la primera posicion del arreglo
console.log(arr);


console.log(arr.toString()); // es igual que el split pero mas eficiente

var elimine = arr.pop(); //elimina el ultimo valor del arreglo 
console.log(arr, elimine);


console.log(arr);
arr.splice(1, 1, "10"); //el primer nro selecciona la posicion del arreglo, el segundo la cantidad de posicions que se quieren eliminar, el tercero el nuevo valor
console.log(arr);

arr = arr.slice(0, 3); //obtener una parte del vector, el primero es el inicio y el 2do es el final
console.log(arr);

* Una funcion muy importante es el .map que nos permite hacer como una especie de for por el vector sin necesidad de crear el ciclo
var arr = [5, 4, 3, 2, 1];
console.log(arr);
//funcion para cambiar los valores del vector
arr.reverse();
console.log(arr);
//usamos .map para sacar el cuadrado
arr = arr.map(function(elem) {
    elem *= elem;
    return elem;
});
console.log(arr);
//usamos el .map y el math.sqrt para raiz cuadrada
arr = arr.map(Math.sqrt);
console.log(arr);

### Sobrecarga de operadores 
* Para evitar la sobrecarga de operadores podemos hacer lo siguiente:
function crearProducto(nombre, precio) {
    nombre = nombre || "Sin nombre";
    precio = precio || "0";
    console.log("Producto: ", nombre, " Precio: ", precio);
}

crearProducto();
crearProducto("Gaseosa");
crearProducto("Gaseosa", 2000);

* Si queremos ya establecer valores sin hacer sobrecarga lo que hacemos es una llamado a una funcion dentro de otra. Por ejemplo:
function crearProducto(nombre, precio) {
    nombre = nombre || "Sin nombre";
    precio = precio || "0";
    console.log("Producto: ", nombre, " Precio: ", precio);
}

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}

crearProducto100("Gaseosa");

### Polimorfismo
El polimorfismo básicamente es cuando una funcion puede recibir diferentes tipos de parámetros.

### Objeto Number
Definimos primero var a = 10; y podemos aplicarle los siguientes métodos:
var a = 10; //valor primitivo
console.log(a.toPrecision(3)); // devuelve la cantidad de digitos que uno le ponga, en este caso 1
console.log(a.toFixed(3)); // devuelve 10.00

var b = new Number("20"); // objeto tipo Number
console.log(b);
console.log(b.valueOf()); // retorna el valor primitivo de la funcion

### Objeto Booleano
También lo podemos definir con valor primitivo o como objetivo tipo booleano como en Number;

### Objeto String
var a = new String("Luis Felipe");
console.log(a);
var b = "Gordillo Carrillo";

console.log(a.toUpperCase()); // agarra la variable y la vuelve en mayuscula
console.log(a.toLowerCase()); // agarra la variable y la vuelve en minuscula

var i = a.indexOf("e"); //devuelve la posicion de la letra dentro de la funcion

console.log("La letra está en la posicion", i);

var nombre = a.substr(0, 4); // obtengo solo una porcion del string
console.log(nombre);

### Objeto Fecha(Date)
* Para inicializar fecha usamos las siguientes nomenclaturas:
var hoy = new Date(); //Definimos la variable tipo fecha.
console.log(hoy);

var fMili = new Date(1000); //fecha en milisegundos
console.log(fMili);

var fFija = new Date(1998, 07, 17, 15); // fecha fija: el orden es año, mes, dia, hora, minuto, segundo, milisegundo
console.log(fFija);

* Las diferentes funciones de la fecha son:
var hoy = new Date();

console.log(hoy.getFullYear()); // nos devuelve el año en el que está numericamente
console.log(hoy.getDate()); // Regresa el día numericamente
console.log(hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds()); // Regresa la hora, minutos y segundos
console.log(hoy.getTime()); // devuelve la hora en milisegundos

#### Nota : Revisar moment.js

* Para sumar días:
var fecha = new Date(2016, 09, 20);

Date.prototype.sumarDias = function(dias) {
    this.setDate(this.getDate() + dias);
    return this;
};

console.log(fecha);
console.log(fecha.sumarDias(3));

### Funcion random entre estos numeros
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEntre(100,120));
