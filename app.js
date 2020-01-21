function identifica(params) {
    console.log(params instanceof Persona);
}

function Persona() {
    this.nombre = "Luis";
    this.edad = 30;
}

var luis = new Persona();

identifica(luis);
// En este caso retornaría true.