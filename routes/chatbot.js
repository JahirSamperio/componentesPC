document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            enviarPregunta();
            scrollChatToBottom();
        }
    });
});

function enviarPregunta() {
    const userInput = document.getElementById("user-input").value;
    const userInputCleaned = userInput.toLowerCase().trim();

    mostrarMensajeUsuario(userInputCleaned);

    let respuesta;
    if (userInputCleaned.includes("hola")) {
        respuesta = "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (userInputCleaned.includes("componentes")) {
        respuesta = "Tenemos una amplia variedad de componentes disponibles. ¿Estás buscando algo en particular?";
    } else if (userInputCleaned.includes("ensamblados")) {
        respuesta = "Ofrecemos ensamblados personalizados según tus necesidades. ¿Tienes alguna preferencia en cuanto a rendimiento o presupuesto?";
    } else if (userInputCleaned.includes("compatibilidad")) {
        respuesta = "Para verificar la compatibilidad entre componentes, te recomiendo utilizar nuestra herramienta de compatibilidad en la sección de 'Personalización'. Si tienes alguna duda específica, házmelo saber.";
    } else if (userInputCleaned.includes("sugerencia")) {
        respuesta = "Para obtener sugerencias personalizadas, te recomiendo completar nuestro cuestionario en la página principal. También puedes explorar nuestros ensamblados preconfigurados en la sección de 'Productos'.";
    } else {
        respuesta = "Lo siento, no tengo una respuesta específica para esa pregunta. Si necesitas más información, te sugiero visitar nuestras secciones de 'Productos' y 'Personalización', o contactar a nuestro equipo de soporte.";
    }

    mostrarRespuestaBot(respuesta);

    // Limpiar el cuadro de entrada después de procesar la pregunta
    document.getElementById("user-input").value = "";
}

function mostrarMensajeUsuario(mensaje) {
    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += `<div class="user-message">${mensaje}</div>`;
    scrollChatToBottom();
}

function mostrarRespuestaBot(respuesta) {
    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += `<div class="bot-message">${respuesta}</div>`;
    scrollChatToBottom();
}

function scrollChatToBottom() {
    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function limpiarConversacion() {
    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML = "";
}