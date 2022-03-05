//creando un arreglo de objetos
let productos = [
    {nombre:"baticycle",precio:450000,foto:"img/producto1.jpg",descripcion:"Motocicleta que utiliza batman"},
    {nombre:"Figura de Batman",precio:250000,foto:"img/producto2.jpg",descripcion:"Figura de batman de peltre edicion limitada"},
    {nombre:"batimovil",precio:370000,foto:"img/producto3.jpg",descripcion:"Batimovil hecho con legos"},
    {nombre:"Figura de batman",precio:150000,foto:"img/producto4.jpg",descripcion:"Foto de batman multiverso de 7 pulgadas"},
    {nombre:"Conjunto de Batmna",precio:120000,foto:"img/producto5.jpg",descripcion:"Conjunto de camisa, mascara y capa de batman"},
    {nombre:"Batman Bat-Tech",precio:50000,foto:"img/producto6.jpg",descripcion:"Figura de batman version Bat-tech de 12 pulgadas"},
    {nombre:"Relog",precio:265000,foto:"img/producto7.jpg",descripcion:"Smartwatch edicion de Batman modelo Bat4740"},
    {nombre:"carpa",precio:635000,foto:"img/producto8.jpg",descripcion:"Carpa con forma de batimovil"},
    {nombre:"Walkie Talkies",precio:210000,foto:"img/producto9.jpg",descripcion:"Walkie Talkies de Batman con luces para niños"},
    {nombre:"sombrilla",precio:80000,foto:"img/producto10.jpg",descripcion:"Sombrilla de Batman para niños "},
    
]

//recorriendo un arreglo con js (seleccionar,buscar,esculcar en los elementos del arreglo)
productos.forEach(function(producto){
    console.log("nacional es el mejor")
})


//escuchando clic en el boton
let boton = document.getElementById("boton");

//Detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//creando una funcion para el boton
function cambiarFoto(){
    let foto = document.getElementById("fotoprueba");
    foto.src="../img/producto1.jpg"
}