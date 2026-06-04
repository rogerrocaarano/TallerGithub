// Lógica de autenticación (Dev2 / task/auth-logic).
//
// Simula la validación que normalmente haría un backend. En un sistema real
// esta función enviaría las credenciales a un servidor y esperaría su respuesta;
// aquí, para fines del taller, simplemente comparamos contra valores fijos.
//
// Credenciales válidas de demostración:
//   usuario: admin
//   clave:   1234

const USUARIO_VALIDO = 'admin';
const CLAVE_VALIDA = '1234';

/**
 * Valida un par usuario/contraseña.
 * @param {string} usuario - Nombre de usuario introducido.
 * @param {string} clave   - Contraseña introducida.
 * @returns {boolean} true si las credenciales son correctas.
 */
function validarCredenciales(usuario, clave) {
  return usuario === USUARIO_VALIDO && clave === CLAVE_VALIDA;
}
