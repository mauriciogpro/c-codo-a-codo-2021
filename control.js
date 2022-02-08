var email = document.getElementById('email')
var password = document.getElementById('password')
var error = document.getElementById('error')
error.style.color = 'red';

//se puede hacer un listado de expresiones regulares
var rexpresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function enviarFormulario(){
    console.log('Enviando formulario...');

    //Vector para los mensajes de error
    var mensajesError = [];

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu mail')
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu contraseña')
    }

    if (!rexpresion.test()) {
        mensajesError.push('Mail invalido')
    }

    // Juntar mensajes de error en un string
    error.innerHTML = mensajesError.join(', ');
    //alert(mensajesError)

 return false;   
}