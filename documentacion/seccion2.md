## Tipos de datos
Existen 2 tipos de datos:

### Tipos primitivos
Existen 5 tipos de datos primitivos:
* var num = 10;
* var string = "texto";
* var boleean = true;
* var undefined = undefined;
* var null = null;

### Nota
Las variables se pueden redefinir sin importar el tipo de dato de ellas.
Por ejemplo: podemos hacer <num = boleean> y el nuevo valor de num será true. 

### Objetos
* Un objeto puede tener contenido varios datos primitivos o también diferentes objetos.
* Para definir un objeto se usa la siguiente notación:
var obj = {
    numero: 10,
    texto: "Nuevo texto",

    objHijo: {
        numero2: 20,
        texto2: "Nuevo texto 2"
    }
};

* Para acceder a un valor dentro de un objeto lo hacemos de la siguiente manera:
    obj.numero = 20;
    obj.texto = "Cambio en el texto";
    obj.objHijo.numero2 = 50;

* Si quiero agregar atributos que me faltaron en un objeto puedo hacer:
    obj.nuevoAtributo = true;
    obj.objHijo.nuevoAtributo2 = 40;

* Podemos igualar nuevas variables a instancias de objetos para referenciar de forma mas fácil:
    var objHijo = obj.objHijo;

* Se puede acceder también por medio de corchetes:
    console.log(obj["objHijo"]["texto2"]);

### Por valor y por referencia
* Cuando igualamos 2 variables primitivas va a ser por valor, mientras que cuando igualamos 2 objetos va a ser por referencia. 

# Funciones 
### Definir funciones
Las funciones las podemos definir de la siguiente manera: 
function NombreFuncion(){
    //Todo lo que va acá es la función
}

* Para invocar la función  sería de la siguiente manera:
    NombreFuncion();

### Parámetros para las funciones
Podemos pasar parámetros a las funcione de la siguiente manera: 
* Datos primitivos
function imprimir(nombre, apellido) {
    console.log(nombre + "" + apellido);
}
imprimir("Luis", "Gordillo");

* Objetos
function imprimir(persona) {
    console.log(persona.nombre + " " + persona.Apellido);
}
imprimir({
    nombre: "Luis",
    Apellido: "Gordillo"
});

* Funciones
### Nota: 
LAS FUNCIONES SON OBJETOS!!!
function imprimir(fn) {
    fn();
}

imprimir( function(){
    console.log("Funcion anónina");
});

### Retorno de las funciones
Una funcion puede regresar primitivos, objetos, funciones, null, undefined.
Usamos el return de la siguiente manera:
function obtenerAleatorio() {
    return Math.random();
}
console.log(obtenerAleatorio() + 10);

* De igual forma, las funciones se pueden asignar a variables y despues llamarlas:
function obtenerNombre() {
    return "Juan";
}
var nombre = obtenerNombre();
console.log(nombre + " Padilla");

* Funciones que devuelven objetos tipo así:

function crearPersona(nombre, apellido) {

    return {
        nombre: nombre,
        apellido: apellido
    };
}
var persona = crearPersona("Maria", "Perez");
console.log(persona);

* Funciones que devuelven funciones tipo así: 

function crearFuncion() {
    return function(nombre) {
        console.log("Me crearon " + nombre + "!!");
    };
}

var nuevaFuncion = crearFuncion();
nuevaFuncion(persona.nombre);

### Métodos y objeto THIS
Los métodos son funciones que se encuentran dentro de los objetos.
Podemos usar this para referirnos a los atributos dentro del objeto y que no mire en el objeto global:

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function() {
        console.log("Nombre completo: " + this.nombre + " " + this.apellido);
    }
};
persona.imprimirNombre();

### Palabra reservada NEW
Básicamente el uso de la palabra new es el mismo uso que se le da en Java(Hacer referencia a una clase pero aca es una funcion). Por ejemplo:
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido + ".";
    };
}

var luis = new Persona("Sandra", "Zarate");

console.log(luis.nombre);
console.log(luis.apellido);
console.log(luis.edad);
console.log(luis.nombreCompleto());

## Prototipos: Prototype
Para agregar atributos o métodos a una funcion(objeto) por fuera de ella. Por ejemplo:
function Persona() {
    this.nombre = "Luis";
    this.apellido = "Gordillo";
    this.edad = 21;
    this.pais = "Colombia";
}

Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + " (" + this.edad + ").");
};

var lf = new Persona();

console.log(lf);
console.log(lf.pais);
console.log(lf.imprimirInfo());





