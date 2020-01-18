function imprimir(fn) {
    fn();
}

imprimir(function() {
    console.log("Funcion anónina");
});