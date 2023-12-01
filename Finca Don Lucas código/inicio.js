// Obtener los elementos del DOM
const form = document.getElementById('form');
const name = document.getElementById('name');
const comment = document.getElementById('comment');
const rating = document.getElementById('rating');
const stars = rating.querySelectorAll('.star');
const submit = document.getElementById('submit');
const comments = document.getElementById('comments');

// Variable para almacenar el valor de la valoración
let ratingValue = 0;

// Función para seleccionar una estrella y las anteriores
function selectStar(star) {
  // Obtener el valor de la estrella
  const value = star.dataset.value;
  // Asignar el valor a la variable global
  ratingValue = value;
  // Recorrer las estrellas
  for (let i = 0; i < stars.length; i++) {
    // Si el índice es menor o igual al valor, añadir la clase selected
    if (i <= value - 1) {
      stars[i].classList.add('selected');
    } else {
      // Si no, quitar la clase selected
      stars[i].classList.remove('selected');
    }
  }
  // Habilitar el botón de enviar si los campos están llenos
  if (name.value && comment.value) {
    submit.disabled = false;
  }
}

// Añadir un evento de click a cada estrella
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectStar(star);
  });
});

// Función para crear un elemento de comentario
function createComment(name, rating, text) {
  // Crear un div con la clase comment
  const comment = document.createElement('div');
  comment.classList.add('comment');
  // Crear un span con el nombre y la clase comment-name
  const commentName = document.createElement('span');
  commentName.classList.add('comment-name');
  commentName.textContent = name;
  // Crear un div con la valoración y la clase comment-rating
  const commentRating = document.createElement('div');
  commentRating.classList.add('comment-rating');
  // Crear cinco divs con la clase comment-star y añadir la clase filled según el valor de la valoración
  for (let i = 1; i <= 5; i++) {
    const commentStar = document.createElement('div');
    commentStar.classList.add('comment-star');
    if (i <= rating) {
      commentStar.classList.add('filled');
    }
    // Añadir el div al div de la valoración
    commentRating.appendChild(commentStar);
  }
  // Crear un p con el texto y la clase comment-text
  const commentText = document.createElement('p');
  commentText.classList.add('comment-text');
  commentText.textContent = text;
  // Añadir los elementos al div del comentario
  comment.appendChild(commentName);
  comment.appendChild(commentRating);
  comment.appendChild(commentText);
  // Devolver el div del comentario
  return comment;
}

// Añadir un evento de submit al formulario
form.addEventListener('submit', e => {
  // Prevenir el comportamiento por defecto
  e.preventDefault();
  // Mostrar un mensaje con los datos ingresados
  alert(`Gracias por tu comentario, ${name.value}.\nTu valoración es de ${ratingValue} estrellas.\nTu comentario es: ${comment.value}`);
  // Crear un elemento de comentario con los datos ingresados
  const newComment = createComment(name.value, ratingValue, comment.value);
  // Añadir el elemento al div de los comentarios
  comments.appendChild(newComment);
  // Limpiar los campos y la valoración
  name.value = '';
  comment.value = '';
  ratingValue = 0;
  stars.forEach(star => {
    star.classList.remove('selected');
  });
  // Deshabilitar el botón de enviar
  submit.disabled = true;
});