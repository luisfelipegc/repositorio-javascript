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