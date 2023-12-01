// Obtener los elementos del DOM
const form = document.getElementById('form');
const name = document.getElementById('name');
const event = document.getElementById('event');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const date = document.getElementById('date');
const start = document.getElementById('start');
const end = document.getElementById('end');
const guests = document.getElementById('guests');
const comments = document.getElementById('comments');
const terms = document.getElementById('terms');
const submit = document.getElementById('submit');

// Función para validar si todos los campos requeridos están llenos
function validateForm() {
  // Obtener los valores de los campos
  const nameValue = name.value;
  const eventValue = event.value;
  const phoneValue = phone.value;
  const emailValue = email.value;
  const dateValue = date.value;
  const startValue = start.value;
  const endValue = end.value;
  const guestsValue = guests.value;
  const termsChecked = terms.checked;
  // Si todos los valores son verdaderos y el checkbox está marcado, habilitar el botón de enviar
  if (nameValue && eventValue && phoneValue && emailValue && dateValue && startValue && endValue && guestsValue && termsChecked) {
    submit.disabled = false;
  } else {
    // Si no, deshabilitar el botón de enviar
    submit.disabled = true;
  }
}

// Añadir un evento de input a cada campo requerido
name.addEventListener('input', validateForm);
event.addEventListener('input', validateForm);
phone.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
date.addEventListener('input', validateForm);
start.addEventListener('input', validateForm);
end.addEventListener('input', validateForm);
guests.addEventListener('input', validateForm);
terms.addEventListener('input', validateForm);

// Añadir un evento de submit al formulario
form.addEventListener('submit', e => {
  // Prevenir el comportamiento por defecto
  e.preventDefault();
  // Mostrar un mensaje con los datos ingresados
  alert(`Gracias por tu contacto, ${name.value}.\nTu tipo de evento es ${event.value}.\nTu teléfono es ${phone.value}.\nTu correo es ${email.value}.\nTu fecha del evento es ${date.value}.\nTu hora del comienzo del evento es ${start.value}.\nTu hora del conclusión del evento es ${end.value}.\nTu número de invitados es ${guests.value}.\nTu comentario es: ${comments.value}`);
  // Limpiar los campos y el checkbox
  name.value = '';
  event.value = '';
  phone.value = '';
  email.value = '';
  date.value = '';
  start.value = '';
  end.value = '';
  guests.value = '';
  comments.value = '';
  terms.checked = false;
  // Deshabilitar el botón de enviar
  submit.disabled = true;
});

