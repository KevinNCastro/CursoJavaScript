// Validación mail
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Introduzca un correo electrónico");
  } else {
    email.setCustomValidity("");
  }
});

// Enviar formulario
let registrar = document.getElementById("registrar");
registrar.addEventListener("submit", validarFormulario);


function validarFormulario(e){
    e.preventDefault();
    console.log("Datos registrados");
}


// Autocompletar datos

//Nombre registrado
let dato1 = document.getElementById('dato1');
dato1.innerText = "Nombre: ";

let ingresoDeNombre = document.getElementById('nombre');
ingresoDeNombre.onkeyup = () => {
    dato1.innerText = 'Nombre: ' + ingresoDeNombre.value;
    localStorage.setItem('nombre', ingresoDeNombre.value);
}

// Telefono registrado
let dato2 = document.getElementById('dato2');
dato2.innerText = "Teléfono: ";

let ingresoDeTelefono = document.getElementById('telefono');
ingresoDeTelefono.onkeyup = () => {
    dato2.innerText = 'Teléfono: ' + ingresoDeTelefono.value;
    localStorage.setItem('telefono', ingresoDeTelefono.value);
}

// Email registrado
let dato3 = document.getElementById('dato3');
dato3.innerText = "Email: ";

let ingresoDeEmail = document.getElementById('email');
ingresoDeEmail.onkeyup = () => {
    dato3.innerText = 'Email: ' + ingresoDeEmail.value;
    localStorage.setItem('email', ingresoDeEmail.value);
}

// Género registrado
let dato4 = document.getElementById('dato4');
dato4.innerText = "Género: ";

let ingresoDeGenero = document.getElementById('genero');
ingresoDeGenero.onkeyup = () => {
    dato4.innerText = 'Género: ' + ingresoDeGenero.value;
    localStorage.setItem('genero', ingresoDeGenero.value);
}

// Edad registrado
let dato5 = document.getElementById('dato5');
dato5.innerText = "Edad: ";

let ingresoDeEdad = document.getElementById('edad');
ingresoDeEdad.onkeyup = () => {
    dato5.innerText = 'Edad: ' + ingresoDeEdad.value;
    localStorage.setItem('edad', ingresoDeEdad.value);
}

// Opciones de turno
const miJSON = '{"opciones": ["Turno mañana", "Turno tarde", "Turno noche"]}';
const miObjeto = JSON.parse(miJSON);

const elegirTurno = document.getElementById("elegirTurno");
miObjeto.opciones.forEach(opcion => {
  const nuevaOpcion = document.createElement("option");
  nuevaOpcion.value = opcion;
  nuevaOpcion.textContent = opcion;
  elegirTurno.appendChild(nuevaOpcion);
});

if (localStorage.getItem("Turno elegido")) {
  elegirTurno.value = localStorage.getItem("Turno elegido");
}
elegirTurno.addEventListener("change", function() {
  localStorage.setItem("Turno elegido", elegirTurno.value);
});

