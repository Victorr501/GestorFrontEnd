/**
 * Funcion para validar el formato de un correo electronico.
 * @param {string} email - El correo electrónico a validar
 * @returns {boolean} - True si el correo es valido, false si no lo es
 */
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}