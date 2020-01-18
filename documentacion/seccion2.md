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
    nombre: "Juan",
    Apellido: "Gordillo"
});

* Funciones
function imprimir(fn) {
    fn();
}

imprimir( function(){
    console.log("Funcion anónina");
});
