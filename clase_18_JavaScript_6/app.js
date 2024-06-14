// Repaso de objetos
let perro= {
    nombre:"Rolo",
    edad:10,
    color:'Negro',
    raza:'labrador',
    ladrar (){
        return 'guau guau'
    }
}

//perro.nombre = 'Negro'; se suele utilizar para modificar alguna variable del objeto
console.log(perro)
console.log(perro.ladrar())

// Clases y funcion constructora

class Perro{
    constructor(nombre,edad,color,raza){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
    }
    ladrar(){
        return 'guau guau'
    }
}

// instanciamos todos los perros que queramos 

let perro1=new Perro('guardian',13,'negro','peligroso');
let perro2=new Perro('sasha',3,'blanca','peligrosa');
let perro3=new Perro('facundo',3,'gris','michi');

console.log(perro1)

// arrays y DOM
 
let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
console.log(letras)

let numero=[1,2,3,4,5,6,7,8];

for (i=0; i<numero.length; i++){
    document.write(numero[i],'<br>')
}















