// Metodo getElementBy (id,class,name,tag)

function cambiar_texto(){
    let elementos = document.getElementsByClassName('elemento')
    elementos[0].innerHTML = 'cambio el texto mediante JS'      
}

function cambiarTodosTexto(){
    let elementos = document.getElementsByTagName('div') // tag es etiqueta
    console.log(elementos)
    for (i=0; i<elementos.length; i++){
        elementos[i].innerHTML = 'cambio todos juntos mediante JS'
    }
}

function cambiarTitulo(){
    let titulo=document.getElementById('titulo')
    titulo.innerHTML = 'cambio el titulo mediante JS'
}

function cambiarColor(){
    let elemento = document.getElementById('elemento_4');
    elemento.style.color = 'red'
    elemento.style.backgroundColor = 'green'
    titulo.style.backgroundColor = 'blue'
}

function mostrarOcultar(){
    let cuadrado = document.getElementById('cuadrado')
    if(cuadrado.style.display === 'none'){
        cuadrado.style.display = 'block'
    }else{
        cuadrado.style.display = 'none'
    }
}

function traerImagen(){
    let imagenElement = document.getElementById('imagen')
    let randomImageNumber = Math.floor(Math.random()*1000)
    imagenElement.src = `https://picsum.photos/300/300?random=${randomImageNumber}`
}

let caja = document.querySelector('.caja');

caja.addEventListener('mouseover', function (){
    console.log('mouse sobre la caja')
})