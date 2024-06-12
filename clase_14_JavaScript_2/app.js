console.log("Hello world from JavaScript");

//Diferentes tipos de variables

let numero;

console.log(typeof numero)

numero = 123; // Variable numerica

console.log(typeof numero)
console.log(numero)

let cadena= "Esto es una cadena de texto"; // Variable tipo string

console.log(typeof cadena)

let booll=true; // Variables tipo true or false (boolean)

console.log(typeof booll)

let number = '123';
console.log(typeof number)
console.log(number)

// Operadores

let numero_1 = 5;
let numero_2 = '5';

console.log(numero_1==numero_2) // '==' este operador es igual a. En este caso es igual pero no compara el tipo de variable

console.log(numero_1===numero_2) // '===' este operador es igual valor y tipo de variable

// Operador posfijo y prefijo

console.log(numero_1)

numero_1++ // es lo mismo que decir numero_1 + 1

console.log(numero_1)

console.log(--numero_1)

console.log(numero_1)

// operadores de asignacion 

let numero_3 = 14;
console.log(numero_3)
numero_3+=Number(prompt('Digita un numero del 1 al 16')); // esto es lo mismo que decir numero_3=numero3+16 || numero_3= 14+16

console.log(numero_3)

// Estructuras de control
/*
let edad=Number(prompt('Ingrese su edad'));

if(edad>=18){
    document.write('Bienvenido a la pagina web, usted es mayor de edad')
}
else{
    document.write('Usted no tiene la edad suficiente para ingresar a la pagina web')
}*/

// Esta es otra forma de realizar la estructura de control:
// Edad >=18 ? document.write('Bienvenido a la pagina web) : document.write('no puede ingresar a la pagina web, no eres mayor de edad')

let nota = Number(prompt('Ingrese una nota'))
console.log('Su nota fue',nota)

if(isNaN(nota))
    {alert('Debes ingresar un numero del 1 al 10')}
else{
if(nota > 10 || nota < 0){

}else if (nota >= 4 && nota < 7){
    console.log('Felicitaciones has aprobado')
    document.write('Felicidades has aprobado')
}else if(nota >=7){
    console.log('Felicidades has promocionado')
    document.write('Felicidades has promocionado')
}else{
    console.log('Has reprobado')
    document.write('Has reprobado')
}
}

// Bucles e Iteraciones

let contador = 0;

while(contador < 10){
    console.log('Numero de iteracion i:',contador+1)
    contador++; // contador = contador +1
}

console.log('Se finaliza el bucle y ahora el valor del contador es:',contador)





























