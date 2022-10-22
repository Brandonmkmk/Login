//declaracion de variables
const nombre = document.getElementById('name');
const direccion = document.getElementById('correo');
const user = document.getElementById('user');
const pass = document.getElementById('contraseña');
const formulario = document.getElementById('formregistro');

//Generando eventos
formulario.addEventListener('submit', registro);

//Creando funciones

function registro (e) {
    e.preventDefault();

    let nombreVal = nombre.value;
    let direccionVal = direccion.value;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || userVal == '' || direccionVal == '' || passVal == '') {
        return;

    }
console.log('el valor para nombre es: ' + nombreVal);
console.log('el valor para direccion es: ' + direccionVal);
console.log('el valor para user es: ' + userVal);
console.log('el valor para contraseña es: ' + passVal);
}