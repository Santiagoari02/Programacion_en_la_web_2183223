
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);   });
      
    
    function validarFormulario(evento) {
        evento.preventDefault();
        var nombre = document.getElementById("nombre").value;
        
        if(nombre.length == 0) {
          alert("Debes escribir un Nombre");
          return;
        }

        if(nombre.length < 3) {
            alert("Debes escribir un Nombre con un mínimo de 3 caracteres");
            return;
          }
    
        if(nombre.length > 25){
            alert("Debes escribir un Nombre con máximo 25 caracteres");
            return;
        }
    
        evento.preventDefault();
        var apellidos = document.getElementById("apellidos").value;
       
        if(apellidos.length == 0) {
          alert("Debes escribir un Apellido al menos");
          return;
        }

        if(apellidos.length < 3) {
            alert("Debes escribir un Apellido con un mínimo de 3 caracteres");
            return;
          }
    
        if(apellidos.length > 25){
            alert("Debes escribir Apellidos con máximo 25 caracteres");
            return;
        }

        evento.preventDefault();
        var numero = document.getElementById("numero").value;

        if(numero.length == 0) {
          alert("Debes escribir tu numero de identificación");
          return;
        }

        if(numero.length > 15){
            alert("Debes escribir un número de identificación menor a los 15 caracteres (válido)");
            return;
        }

        evento.preventDefault();
        var lugarnacimiento = document.getElementById("lugarnacimiento").value;
       
        if(lugarnacimiento.length == 0) {
          alert("Debes escribir un lugar de nacimiento");
          return;
        }

        evento.preventDefault();
        var fechanacimiento = document.getElementById("fechanacimiento").value;
       
        if(fechanacimiento.length == 0) {
          alert("Debes escribir una fecha de nacimiento");
          return;
        }

        if(fechanacimiento.length > 10) {
            alert("Debes escribir una fecha de nacimiento válida");
            return;
        }

        evento.preventDefault();
        var nombreciudad = document.getElementById("nombreciudad").value;
       
        if(nombreciudad.length == 0) {
          alert("Debes escribir una ciudad de residencia");
          return;
        }

        if(nombreciudad.length > 15) {
            alert("Debes escribir una ciudad de residencia válida");
            return;
        }
    
        evento.preventDefault();
        var email = document.getElementById("email").value;
      
        if(email.length == 0) {
              alert("Debes escribir un email");
              return;
        }
        
        if(email.length > 25){
                alert("Debes escribir un email entre 0 y 25 caracteres");
                return;
        }

        evento.preventDefault();
        var usuario = document.getElementById("usuario").value;
      
        if(usuario.length == 0) {
              alert("Debes escribir un usuario");
              return;
        }
        
        if(email.length > 25){
                alert("Debes escribir un usuario entre 0 y 25 caracteres");
                return;
        }

        evento.preventDefault();
        var contraseña = document.getElementById("contraseña").value;
      
        if(contraseña.length == 0) {
              alert("Debes escribir una contraseña");
              return;
        }
        
        if(contraseña.length < 8){
                alert("Debes escribir una contraseña entre 8 y 20 caracteres");
                return;
        }

        if(contraseña.length > 20){
            alert("Debes escribir una contraseña entre 8 y 20 caracteres");
            return;
        }

        evento.preventDefault();
        var confirmarcontraseña = document.getElementById("confirmarcontraseña").value;
      
        if(confirmarcontraseña.length == 0) {
              alert("Debes confirmar la contraseña");
              return;
        }
        

    
        this.submit();
    }
    
    
    function updateTextInput(val) {
        document.getElementById('textInput').value=val; 
      }