setTimeout(()=>{
  Swal.fire('Completa todos tus datos para reservar un turno')
},2000)

function mostrarMensaje() {
  Swal.fire({
      title: 'No te tardes',
      text: 'Es una dificil escoger un turno, pero recuerda que pueden acabarse',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: false
  })
}

let myTimeout = setTimeout(mostrarMensaje, 60000);

function cerrarMensaje() {
  Swal.close()
}

function reiniciarContador() {
  cerrarMensaje()
  clearTimeout(myTimeout);
  myTimeout = setTimeout(mostrarMensaje, 60000);
}
document.addEventListener("mousemove", reiniciarContador)

// Validación mail
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Introduzca un correo electrónico");
  } else {
    email.setCustomValidity("");
  }
});


function obtenerDatos() {
  return fetch('./datos.json')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

let datos;

window.addEventListener('load', () => {
  obtenerDatos().then(data => {
    datos = data;
    cargarTurnos();
  });
});

function cargarTurnos() {
  let selectTurnos = document.getElementById('elegirTurno');

  datos.turnos.forEach(turno => {
    let option = document.createElement('option');
    option.value = turno.id;
    option.text = turno.hora;
    selectTurnos.add(option);
  });
}

function validarFormulario(e) {
  e.preventDefault();
  
  let nombre = document.getElementById('nombre').value;
  let telefono = document.getElementById('telefono').value;
  let email = document.getElementById('email').value;
  let genero = document.getElementById('genero').value;
  let edad = document.getElementById('edad').value;
  let turno = document.getElementById('elegirTurno').value;
  
  if (!turno) {
    Swal.fire(
      'Error',
      'Debe seleccionar un turno',
      'error'
    );
    return;
  }
  
  fetch('http://localhost:3000/reservar-turno', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, telefono, email, genero, edad, turno
    })
  })
  .then(response => response.json())
  .then(data => {
    Swal.fire(
      '¡Datos registrados!',
      'Sus datos han sido registrados correctamente',
      'success'
    );
  })
  .catch(error => {
    console.error('Error:', error);
    Swal.fire(
      'Error',
      'No se pudo registrar el turno',
      'error'
    );
  });
}


fetch("./datos.json")
  .then(response => response.json())
  .then(data => {


    const elegirTurno = document.getElementById("elegirTurno");

    data.turnos.forEach(turno => {
      const nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = turno.nombre;
      nuevaOpcion.textContent = turno.nombre + " - " + turno.horario + " (" + turno.lugaresDisponibles + " lugares disponibles)";
      elegirTurno.appendChild(nuevaOpcion);
    });
    
    if (localStorage.getItem("Turno elegido")) {
      elegirTurno.value = localStorage.getItem("Turno elegido");
    }

    elegirTurno.addEventListener("change", function() {
      localStorage.setItem("Turno elegido", elegirTurno.value);
    });
  });