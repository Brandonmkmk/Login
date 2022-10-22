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
        creaMensaje('Verifica tus campos', 'danger');
        return;

    }

    const usuario = {
        nombre: nombreVal,
        correo : direccionVal,
        user: userVal,
        pass: passVal,


    }
    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = '';
    direccion.value = '';
    user.value = '';
    pass.value = '';

    creaMensaje('usuario registrado', 'success');
    
}

function creaMensaje(texto, tipo){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList.add('alert', 'alert-' + tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function() {
        nuevoElemento.remove();
     }, 2000);

 
}