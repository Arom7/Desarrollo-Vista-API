
const url = "http://127.0.0.1:8000/api/usuarios"

function guardar_personas(){
    let data = {
        nombre : document.getElementById("nombre_persona").value,
        primerApellido: document.getElementById("primer_apellido").value,
        segundoApellido: document.getElementById("segundo_apellido").value,
        username : document.getElementById("username").value,
        contrasenia: document.getElementById("contrasenia").value
    };
    fetch(url,{
        method : "POST",
        body : JSON.stringify(data),
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al procesar la solicitud');
        }
        return response.json();
    
    })
    .then(data => {
        console.log(data);
        if (data.status == 200){
            openSuccessModal(data.message);
        }
        else{
            openErrorModal(data.message)
        }

    })
    .catch(error => {
        console.error('Se produjo un error:', error);
        openErrorModal(error);
    });
}

function openSuccessModal(successMessage) {
    console.log(successMessage);
    document.getElementById("successMessage").innerHTML = successMessage;
    $('#successModal').modal('show');
  }

function openErrorModal(errorMessage) {
    document.getElementById("errorMessage").innerHTML = errorMessage;
    $('#errorModal').modal('show');
  }