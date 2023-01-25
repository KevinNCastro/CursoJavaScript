//Mensaje inicial
alert("¡Hola! Para realizar una reserva indíquenos los siguientes datos")

function datoIngresado() {
    alert("Dato ingresado correctamente")
}

//Nombre y apellido|
let nombreYApellido = "";
nombreYApellido = prompt("Ingrese su nombre y apellido") 
while(nombreYApellido ==""){
    alert("Dato no completado")
    nombreYApellido = prompt("Ingrese su nombre y apellido")
}

datoIngresado()

//Número de contacto
let telefono = "";
telefono = prompt("Ingrese un número de contacto") 
while(telefono ==""){
    alert("Dato no completado")
    telefono = prompt("Ingrese un número de contacto")
}

datoIngresado()

//E-mail de contacto
let email = "";
email = prompt("Ingrese un email") 
while(email ==""){
    alert("Dato no completado")
    email = prompt("Ingrese un email")
}

datoIngresado()

//Datos personales 
const datosPersonales = {
    nombreYApellido,
    telefono,
    email
}

console.log(datosPersonales)

// Saludo 2
class Saludo1{
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono   = telefono;
        this.email  = email;
    }
    hablar(){
        alert("Bienvenido "+ this.nombre +  ". Al finalizar de completar todos los campos, te llamaremos al: " + this.telefono + ". En caso de no contestar te escribiremos a: " + this.email);
    }
}
const datosPersonalesIngresados = new Saludo1(nombreYApellido, telefono, email);
datosPersonalesIngresados.hablar();

//Ubicación en el restaurante
let ubicacion = "SI";
ubicacion = prompt("Si desea reservar la terraza escriba " + "SI. " + "En caso de querer el interior oprima cualquier tecla")
if (ubicacion == "SI"){
    alert("Terraza reservada")
    console.log("Ubicación: terraza");
}else{
    alert("Interior reservado")
    console.log("Ubicación: interior");
}


//Cantidad de personas menores
let cantidadPersonasMenores = "";
cantidadPersonasMenores = prompt("Indique la cantidad de personas menores de 12 años") 
while(cantidadPersonasMenores ==""){
    alert("Dato no completado")
    cantidadPersonasMenores = prompt("Indique la cantidad de personas menores de 12 años")
}
console.log ("Cantidad de personas menores: " + cantidadPersonasMenores)

datoIngresado()

//Cantidad de personas Mayores
let cantidadPersonasMayores = "";
cantidadPersonasMayores = prompt("Indique la cantidad de personas mayores de 5 años") 
while(cantidadPersonasMayores ==""){
    alert("Dato no completado")
    cantidadPersonasMayores = prompt("Indique la cantidad de personas mayores de 5 años")
}
console.log ("Cantidad de personas mayores: " + cantidadPersonasMayores)

datoIngresado()



//Fecha de reserva
let dia = "";
dia = prompt("Ingrese una fecha a reservar") 
while(dia ==""){    
    alert("Dato no completado")
    dia = prompt("Ingrese una fecha a reservar")
}
console.log ("Fecha de reserva: " + dia)

datoIngresado()

//Horario de reserva
let horario = "";
horario = prompt("Ingrese un horario a reservar") 
while(horario ==""){
    alert("Dato no completado")
    horario = prompt("Ingrese un horario a reservar")
}
console.log ("Horario: " + horario)

datoIngresado()

alert("Aqui lo que se cobra en cubiertos se dona a quien lo necesite, por eso te pedimos que nos indiques los nombres de organizaciones con las que quieras colaborar.")
const listaOrganizaciones = [];
let   cantidad     = 3;
do{
   let entrada = prompt("Ingresar nombre");
   listaOrganizaciones.push(entrada.toUpperCase());
   console.log(listaOrganizaciones.length);
}while(listaOrganizaciones.length != cantidad)
alert("Además de tu colaboración, nosotros ayudaremos con otras dos entidades")
const organizacionesPorDefecto = listaOrganizaciones.concat(["Comedor Feliz","Zapatillas para los chicos"]);
alert(organizacionesPorDefecto.join("\n"));

listaOrganizaciones.forEach( (string)=> {
    console.log(string + " te agradece tu colaboración")
} )

alert("Felicidades! Su reserva se ha completado satisfactoriamente")
