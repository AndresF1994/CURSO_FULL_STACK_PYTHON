// Repaso de objetos 
let gato={
    nombre:'Michi',
    edad:10,
    color:'Negro',
    raza:'Persa',
    maullar(){
        return 'miau , miau'
    }
}
console.log(gato.maullar())

// clases y funciones constructora
// se recomienda el uso para cuando hay mas de un objeto igual

class persona {
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}
// instanciar a las personas que nosotros tenemos
let persona_1 = new persona('Andres Felipe', 'Pacheco Pacheco',30)
let persona_2 = new persona('Nahitan David', 'Pacheco',3)
let persona_3 = new persona('Jose Enio', 'Pacheco', 73)

console.log(persona_1)
console.log('El nombre del jugardor dos es: ',persona_2.nombre)

// si queremos cambiar el nombre o cualquier propiedad del objeto
//antes 
console.log(persona_3.nombre)
persona_3.nombre= 'Libia Maria';
//despues
console.log(persona_3.nombre)

//String -------> Cadenas de texto
// son tipos de datos primitivos 

let cadena_1= new String('Esta es una de las formas de declarar una variable tipo string');
let cadena_2= 'Esta es la forma mas sencilla de declarar una variable tipo string'

let empy =' '; // este es un string vacio

// ahora veremos algunas propiedades y metodos

// propiedad .length o largo que cadena

let cadena = 'Este es un texto implementado para ensayar las propiedades y metodos de los string. <br>'
// el <br> nos proporciona un salto de linea dentro de la variable tipo string

document.write(cadena) 
document.write('La longitud del texto cadena es: ',cadena.length)
document.write('<br> En la posicion 6 esta la siguiente letra:', cadena.charAt(6))

// uppercase y lowercase
// estos suelen se utilizados para temas de validacion 
/*let nombre = prompt('Ingresa tu nombre')
console.log('El nombre ingresado es:',nombre)
console.log('Esto en mayuscula es:',nombre.toUpperCase(nombre))
console.log('Esto en minuscula es:',nombre.toLowerCase(nombre))
*/

// Objetos Math 

const pi = Math.PI;
console.log(pi)

let numeroNegativo = -30;
console.log(Math.abs(numeroNegativo))

console.log(Math.pow(numeroNegativo,2))// para elevar el numero a una potencia

// arrays, definicion 
let letras = ['a','e','z','r']
console.log(letras)
console.log(letras[1])// imprime el segundo elemento 'e'
console.log(letras.length)

let numeros = [1,2,3,4,5,6,7,8,9,10]

document.write('Los elementos del array son: <br>')
for (i=0; i<numeros.length; i++){
    document.write(numeros[i])
    document.write('<br>')
}
// para modificar elementos del array realizamos la siguiente sentencia
numeros [0]= 33;
console.log(numeros)

// Ahora Existen metodos en los arrays como push y pop  
numeros.push(11,12,13,14,15,16,17,18)// En este caso el push agrega al final del array los nuevos elementos o variables que queramos adicionar
console.log(numeros)

numeros.pop()
console.log(numeros) // me elimina la ultima variable del array

// shift and unshift
// el metodo unshift va a agregar elementos al principio de un array
// el metodo shift va a eliminar el primer elemento 
let frutas=['naranja', 'pera', 'uva']
console.log(frutas)

frutas.unshift('manzana','sandia','banano')
console.log(frutas)

let frutaseliminadas = frutas.shift()
console.log(frutas)
console.log(frutaseliminadas)

// sort y reverse
// sort ordena alfabeticamente el array 
// reverse coloca lo de atras para adelante 
console.log(frutas.sort())
console.log(frutas.reverse())





























