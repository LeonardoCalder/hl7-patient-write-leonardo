// app.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('serviceRequestForm');
  form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();
  
  const datosSolicitud = recolectarDatosFormulario();

  console.log("Datos de la solicitud:", datosSolicitud);

  // Aquí se enviaría al servidor
  // enviarSolicitud(datosSolicitud);

  alert('Solicitud enviada correctamente');
}

function recolectarDatosFormulario() {
  return {
    paciente: obtenerDatosPaciente(),
    medico: obtenerDatosMedico(),
    diagnostico: obtenerDiagnostico(),
    procedimiento: obtenerDatosProcedimiento(),
    disponibilidad: obtenerDisponibilidad()
  };
}

function obtenerDatosPaciente() {
  return {
    nombre: obtenerValor('nombrePaciente'),
    fechaConsulta: obtenerValor('fechaConsulta')
  };
}

function obtenerDatosMedico() {
  return {
    nombre: obtenerValor('nombreMedico'),
    cedula: obtenerValor('cedulaMedico')
  };
}

function obtenerDiagnostico() {
  return obtenerValor('diagnostico');
}

function obtenerDatosProcedimiento() {
  return {
    nombre: obtenerValor('procedimiento'),
    justificacion: obtenerValor('justificacion')
  };
}

function obtenerDisponibilidad() {
  const fechas = ['fechaOpcion1', 'fechaOpcion2', 'fechaOpcion3']
    .map(id => obtenerValor(id))
    .filter(fecha => fecha !== "");

  return {
    fechas,
    horario: obtenerValor('horarioPreferente')
  };
}

function obtenerValor(id) {
  const elemento = document.getElementById(id);
  return elemento ? elemento.value : '';
}

// function enviarSolicitud(data) {
//   fetch('/api/solicitudes', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
// }
