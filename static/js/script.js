// Hace que esté constantemente escuchando
document.getElementById('iban').addEventListener('input', reviewIban);
function reviewIban(){
    let iban = document.getElementById('iban').value
    let ibanError = document.getElementById('ibanError')
    if(iban.length !== 24){
        ibanError.style.display = "block"
    } else{
        ibanError.style.display = "none"
    }
}

document.getElementById('formCuenta').addEventListener('submit', validarFormulario);
function validarFormulario(event) {
    let iban = document.getElementById('iban').value;

    event.preventDefault(); // Evita que el formulario se envíe
    
    if (iban.length !== 24) {
        return;
    }

    let saldo = document.getElementById('saldo').value;

    // Llamar al la dirección de la función
    fetch('http://localhost:8000/crear_cuenta/?iban='+encodeURIComponent(iban)+'&saldo='+saldo, {
        method: 'POST'
    })
    .then(response => {
        if (response.ok){
            document.getElementById('iban').value = "";
            document.getElementById('saldo').value = "";
        } else{
            alert("Algo salió mal");
            console.log("Error al registrar la cuenta " + response.status);
        }
    })
    .catch(error => { // Salta cuando el iban está repetido o cuando no hay conexión con el servidor
        alert("Error de red o conexión: " + error.message);
        console.error("Error:", error);
    });
}