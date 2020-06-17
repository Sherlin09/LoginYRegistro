//declaracion de variables de referencia a objetos
const nombre = document.getElementById('name');
const user = document.getElementById('user');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener ('submit', registro);

function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let userVal = user.value;
    let emailVal = email.value;
    let passValue = pass.value;

    if(nombreVal == '' || userVal == '' || emailVal == '' || passValue == ''){
        creaMensaje('Verifica tus campos','danger');
        return;
        
    }

    const usuario = {
        nombre: nombreVal,
        user:userVal,
        email: emailVal,
        pass: passValue
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = '';
    user.value = '';
    email.value = '';
    pass.value = '';

    creaMensaje('Usuario Registrado','success');
}



