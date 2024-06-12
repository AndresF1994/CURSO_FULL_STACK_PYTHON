// Declaracion de funciones 
function saludar(){
    console.log('Hola Mundo')
    //document.write('Hola Mundo')
    //alert('Hola Mundo')
}

// invocacion o llamado de la funcion

saludar();

let num_1= Number.parseFloat(prompt('Ingrese el primer numero'));

let num_2= Number.parseFloat(prompt('Ingrese el segundo numero'));

function sumar(num_1, num_2){
    console.log('La suma de los dos numeros es la siguiente:',num_1+num_2);
}

var resultado =sumar(num_1, num_2);

print(resultado);

// multiplicar 
function tablaMultiplicar(hasta){
    for (var i=1; i<= hasta;i++){
        console.log('5x',i,'=',5*i)
    }
}

//tablaMultiplicar(10);

// Parametros determinados
function multiplicar(a, b=1){
    return a*b;
}

console.log(multiplicar(3))
console.log(multiplicar(3,4))