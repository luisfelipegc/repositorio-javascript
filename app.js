var Obj = {

    nombre: "Luis",
    apellido: "Gordillo",
    regresaDatos: function() {
        return "Nombre: " + this.nombre + ", Apellido: " + this.apellido;
    }

};

console.log(Obj.regresaDatos());
console.log(Obj);
console.log(Obj.nombre);