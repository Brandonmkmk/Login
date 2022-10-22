// declaracion para los objetos del formulario
const usuario = document.getElementById('user');
const password = document.getElementById('contraseña');
const formulario = document.getElementById('formlogin')

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e) {
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        return;
    }
    console.log('El valor para user es ' + usuarioVal);
    console.log('El valor para pass es ' + passwordVal);


}
