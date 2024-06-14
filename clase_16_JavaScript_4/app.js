// Declaracion de una funcion 

function saludar(){
    console.log('Hola mundo')
    alert('Hola mundo')
}
// llamada de la funcion
//saludar();

// funcion regular 

function cuadrado(x){
    return x*x;
}

let resultado = cuadrado(Number.parseFloat(prompt('Ingrese un numero')));
console.log('El resultado de la operacion es:',resultado)

// funcion flecha
let i = Number.parseFloat(prompt('Digite un numero'));
let cuadradoFlecha = i => i*i;          
console.log('El resultado del cuadrado es:', cuadradoFlecha(i))

// scope alcances locales y globales
var global = 'Global';

console.log(global)

function consologear(){
    console.log(global)
}

consologear();

// callbacks

function saludarCallback(nombre){
    console.log('Mi nombre es:',nombre)
}

function pedirNombre(callbacks){
    var nombre = prompt('ingrese su nombre de usuario')
    callbacks(nombre)
}

pedirNombre(saludarCallback)


//objetos creacion y uso
// creacion de un objeto de manera literal

let perro = {
    nombre:"Rolo",
    edad:10,
    color:'Negro',
    raza:'labrador'
}

console.log(perro)
// para traer un solo valor del objeto
// operador punto sirve para traer una propiedad en particular
console.log('El nombre del perro es:',perro.nombre)

// modificar las propiedades del objeto
perro.nombre = 'Helena'
console.log('el nombre de mi perra es: ', perro.nombre)
console.log(perro)

// creacion de un objeto mediante object 

let persona = new Object();
// creacion de las propiedades
persona.nombre = 'Nahitan'
persona.apellido = 'Pacheco'
persona.edad = 3
persona.pied='derecho'

console.log(persona)
console.log('La persona se llama: ', persona.nombre,'', persona.apellido)
// para modificar alguna propiedad
persona['nombre'] = 'David'
console.log('El nombre ahora es:', persona.nombre)

// Metodos, van a ser funciones que estan dentro de un objeto

let personas = {
    nombre:'David',
    profesion:'Futbolista',
    edad:3,
    pied:'derecho',
    // hasta aca las propiedades, ahora declaramos la funcion
    identificar(){
        return 'Hola soy'+ this.nombre
    }

}
console.log(personas.identificar())

// para cuando tenemos mas de un objeto igual

class jugador {
    constructor(nombre,apellido,club) {
        this.nombre= nombre;
        this.apellido = apellido;
        this.club = club;
}
}

let jugador_1 = new jugador('Andres', 'Pacheco','Real Madrid')
let jugador_2 = new jugador('Julian', 'Alvarez', 'Manchester City')

console.log(jugador_1.apellido)




