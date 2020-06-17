//declarar variables para vincular os objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

formulario.addEventListener('submit', login);


//funciones a ejucutar
function login(e){
    e.preventDefault();
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('Verifica tus campos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse (localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje('Usuario Correcto', 'success');
            localStorage.setItem('sesion', 'activo');
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            },1000);
        } else {
            creaMensaje('Usuario incorrecto', 'danger');
        }
    }else{
        creaMensaje('No existe usuario', 'danger');
    }
}