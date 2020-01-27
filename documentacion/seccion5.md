### Ciclo for
var Persona = function() {
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 30;
};

var juan = new Persona();

//ciclo for nos permite recorrer las propiedades del objeto
for (prop in juan) {
    console.log(prop, ":", juan[prop]);
}

### Rotulacion de los ciclos
for_principal:
    for (i = 1; i <= 5; i++) {
        console.log("i:", i);
        for (j = 1; j < 5; j++) {
            // cuando detecta algo que no queremos entonces se sale del ciclo y entra al ciclo del nombre
            //rotulado
            continue for_principal;
            console.log("j:", j);
        }
    }

### Funciones de tiempo
// funcion que establecemos para que aparezca despues de X tiempo.(tiempo en ms)
setTimeout(function() {
    console.log("Pasaron 5 segundos");
}, 5000);

//esta es para cada cuanto quiero que se repita la funcion.(tiempo en ms) 

var segundos = 0;
var intervalo = setInterval(function() {
    segundos++;
    console.log("seg:", segundos);

    if (segundos == 3) {
        clearInterval(intervalo);
    }
}, 1000);