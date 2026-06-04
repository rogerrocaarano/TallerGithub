// Módulo de inicio de sesión — capa de interfaz (Dev1 / task/auth-ui).
//
// Responsabilidad de Dev1: capturar el envío del formulario, leer los valores
// y mostrar el resultado al usuario. La VALIDACIÓN real la realiza la función
// validarCredenciales(usuario, clave), que implementa Dev2 en js/auth.js.
//
// Mientras no se integre el trabajo de Dev2, esta llamada fallará con
// "validarCredenciales is not defined". Eso es esperado en esta rama.

const form = document.getElementById('loginForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('password').value;

  // Llamada a la lógica de validación (la provee Dev2 en auth.js).
  const esValido = validarCredenciales(usuario, clave);

  if (esValido) {
    mensaje.textContent = '✅ ¡Bienvenido! Has iniciado sesión correctamente.';
    mensaje.className = 'mensaje ok';
  } else {
    mensaje.textContent = '❌ Usuario o contraseña incorrectos.';
    mensaje.className = 'mensaje error';
  }
});
