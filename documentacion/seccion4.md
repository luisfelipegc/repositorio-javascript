## Manejo de errores
//Manejo de erroes en Javascript

try {

    var a = 100;
    console.log("El valor de a es ", b);

}
//podemos usar despues del try tanto catch como finally obligatoriamente

//se ejecuta si da error el try
catch (e) {
    console.log(e);
}

//siempre se va a ejecutar
finally {
    console.log("Finalmente");
}

## Cookies 
function crearCookie(nombre, valor) {

    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);

    //definir la cookie y a su vez la fecha de expiracion.
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}

function borrarCookie(nombre) {

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);

    //definir la cookie y a su vez la fecha de expiracion.
    document.cookie = nombre + "=x;expires=" + hoy.toUTCString() + ";";

}

crearCookie("Nombre", "Isabella");

var cookies = document.cookie;
console.log(cookies);
borrarCookie("Nombre");


### Funciones Call, Bind y Apply

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function() {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
};

var carro2 = {
    color: "Negro",
    marca: "Toyota",
};

//console.log(carro.imprimir());

var logCarro = function(arg1, arg2) {
    console.log("Carro:", this.imprimir());
    console.log("Argumentos:", arg1, arg2);
    console.log("============================");
};

// con el bind hacemos que el this de la funcion logCarro apunte a carro que es el objeto dentro del bind
// y tambien establecemos el objeto en la variable logModeloCarro
var logModeloCarro = logCarro.bind(carro);

logModeloCarro("abc", "xyz");

//el call es una forma resumida del bind, en lo primero colocamos a donde queremos que apunte el this y en
//las otras 2 colocamos los argumentos
logModeloCarro.call(carro, "123", "456");

// lo mismo que el call solo que recibe 2 parametros: el primero hacia donde apunta el this 
//y el segundo un arreglo
logModeloCarro.apply(carro, ["sdf", "fgh"]);

// FUNDAMENTALMENTE SIRVE PARA FUNCIONES PRESTADAS. POR EJEMPLO
console.log(carro.imprimir.call(carro2));


### IF - ELSE
var a = 10;
var b = 20;

//esto es una especie de if. el "?" pregunta si a es mayor que b. Si es true devuelve a, sino devuelve b
// por eso el a:b
var c = (a>b)? a : b;

## Pasar objeto JS a JSON
var objetoJS = {
    nombre: "Luis Gordillo",
    edad: 21
};

console.log("Objeto literal:", objetoJS);

//linea de codigo para pasar de JS a JSON
var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

//para pasar algo que viene en formato JSON a objeto en JS 

var objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);