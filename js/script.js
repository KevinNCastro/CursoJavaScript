//Mensaje inicial
alert("¡Hola! Para realizar una reserva indiquenos los siguientes datos")

//Nombre y apellido|
let nombreYApellido = "";
nombreYApellido = prompt("Ingrese su nombre y apellido") 
while(nombreYApellido ==""){
    alert("Dato no completado")
    nombreYApellido = prompt("Ingrese su nombre y apellido")
}
console.log (nombreYApellido)

//Ubicación en el restaurante
let ubicacion = "SI";
ubicacion = prompt("Si desea reservar la terraza escriba " + "SI. " + "En caso de querer el interior oprima cualquier tecla")
if (ubicacion == "SI"){
    alert("Terraza reservada")
    console.log("Ubicación: terraza");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    alert("Interior reservado")
    console.log("Ubicación: interior");
}


//Cantidad de personas
let cantidadPersonas = "";
cantidadPersonas = prompt("Indique la cantidad de comensales") 
while(cantidadPersonas ==""){
    alert("Dato no completado")
    cantidadPersonas = prompt("Indique la cantidad de comensales")
}
console.log (cantidadPersonas)

//Fecha de reserva
let dia = "";
dia = prompt("Ingrese una fecha a reservar") 
while(dia ==""){    
    alert("Dato no completado")
    dia = prompt("Ingrese una fecha a reservar")
}
console.log (dia)

//Horario de reserva
let horario = "";
horario = prompt("Ingrese un horario a reservar") 
while(horario ==""){
    alert("Dato no completado")
    horario = prompt("Ingrese un horario a reservar")
}
console.log (horario)


//Número de contacto
let telefono = "";
telefono = prompt("Ingrese un número de contacto") 
while(telefono ==""){
    alert("Dato no completado")
    telefono = prompt("Ingrese un número de contacto")
}
console.log (telefono)

//E-mail de contacto
let email = "";
email = prompt("Ingrese un email") 
while(email ==""){
    alert("Dato no completado")
    email = prompt("Ingrese un email")
}
console.log (email)