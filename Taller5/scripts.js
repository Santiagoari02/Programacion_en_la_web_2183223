document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario);   });
  

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    if(nombre.length == 0) {
      alert("Debes escribir un Nombre");
      return;
    }

    if(nombre.length > 25){
        alert("Debes escribir un Nombre con máximo 25 caracteres");
        return;
    }

    evento.preventDefault();
    var apellido = document.getElementById("apellido").value;
    if(apellido.length == 0) {
      alert("Debes escribir un Apellido");
      return;
    }

    if(apellido.length > 25){
        alert("Debes escribir un Apellido con máximo 25 caracteres");
        return;
    }

    evento.preventDefault();
    var ccusuario = document.getElementById("ccusuario").value;

    if(ccusuario.length == 0) {
        alert("Debes escribir un ccusuario");
        return;
      }
  
    if(ccusuario.length < 10 || ccusuario.length > 20){
          alert("Debes escribir un ccusuario entre 10 y 25 caracteres");
          return;
      }

    if(ccpaswd.length == 0) {
        alert("Debes escribir un paswd");
        return;
      }
  
    if(ccpaswd.length < 15 || ccusuario.length > 20){
          alert("Debes escribir un ccpaswd entre 10 y 25 caracteres");
          return;
      }

    evento.preventDefault();
    var email = document.getElementById("email").value;
  
    if(email.length == 0) {
          alert("Debes escribir un email");
          return;
        }
    
    if(email.length > 120){
            alert("Debes escribir un email entre 0 y 120 caracteres");
            return;
        }


    this.submit();
}


function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }







