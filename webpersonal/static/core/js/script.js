// Crear el contenido de la ventana modal/ emergente "
function showModalMessage(message, imageSrc) {
    var modal = document.createElement("div");
    modal.classList.add("modal");  
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    // Crear la imagen
    var image = document.createElement('img');    
    image.src = "{% static 'core/fotos-autos/logo-nb.jpg' %}";  
    // const imageUrl = baseUrl + 'fotos-autos/logo-nb.jpg';  
    // image.src = '${STATIC_URL}core/fotos-autos/logo-nb.jpg'; 
    image.alt = 'Logo de la empresa';
    image.classList.add("modal-image");
    // Crear el mensaje
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add("modal-message");
    // Crear el botón de aceptar
    var acceptButton = document.createElement("button");
    acceptButton.textContent = "Aceptar";
    acceptButton.classList.add("modal-button");
    acceptButton.addEventListener("click", function() {
        // Cerrar el modal cuando se hace clic en el botón
        modal.style.display = "none";
    });

    // Agregar los elementos al contenido del modal
    modalContent.appendChild(image);
    modalContent.appendChild(messageElement);
    modalContent.appendChild(acceptButton);
    modal.appendChild(modalContent);

    // Agregar el modal al documento
    document.body.appendChild(modal);
    // Mostrar el modal
    modal.style.display = "block";
}
function validarFormulario() {
    // Valida nombre
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        showModalMessage("El campo 'Nombre' es obligatorio", "logo.png");
        return false;
    }
     // Valida email
    var email = document.getElementById("email").value;
    if (email === "") {
        showModalMessage("El campo 'E-mail' es obligatorio", "logo.png");
        return false;
    }
     // Valida telefono
    var telefono = document.getElementById("telefono").value;
    if (telefono === "") {
        showModalMessage("El campo 'Telefono' es obligatorio", "logo.png");        
        return false;
    }
     // Validar asunto
    var asunto = document.getElementById("asunto").value;
    if (asunto === "") {
        showModalMessage("El campo 'Asunto' es obligatorio", "logo.png");        
        return false;
    }
     // Validar mensaje
    var mensaje = document.getElementById("mensaje").value;
    if (mensaje === "") {
        showModalMessage("El campo 'Mensaje' es obligatorio", "logo.png");       
        return false;
    }
     // Validar medio de contacto
    var medioContacto = document.querySelector('input[name="medioContacto"]:checked');
    if (medioContacto === null) {
        showModalMessage("Debe seleccionar un medio de contacto", "logo.png");       
        return false;
    }
     // Si todas las validaciones son correctas, enviar el formulario   
    return true;    
}
// Mas informacion del modelo
let esconderTexto_btn = document.getElementById('esconderTexto-btn');
let esconderTexto = document.getElementById('esconderTexto');
esconderTexto_btn.addEventListener('click', toggleTexto);

function toggleTexto() {
    esconderTexto.classList.toggle('show');
    if(esconderTexto.classList.contains('show')){
        esconderTexto_btn.innerHTML = 'ocultar';
    }
    else{
        esconderTexto_btn.innerHTML = 'Stock';
    }
}
