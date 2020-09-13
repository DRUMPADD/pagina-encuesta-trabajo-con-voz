var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var campoRespuesta = Array();
var escuchaRespuesta = Array();

for (let i = 1; i <= 5; i++) {
    campoRespuesta[i] = document.querySelector('#r' + i);
    escuchaRespuesta[i] = document.querySelector('#insert_r' + i);
}
var activo = false;

function InsertarRespuesta() {
    if (activo) {
        escuchaRespuesta.src = 'imagenes/mic.gif';
        activo = false;
    } else {
        escuchaRespuesta.src = 'imagenes/mic-animate.gif';
        activo = true;

        var reconocimiento = new SpeechRecognition();
        reconocimiento.lang = 'es-MX';
        reconocimiento.interimResults = false;
        reconocimiento.maxAlternatives = 1;

        reconocimiento.start();

        reconocimiento.onresult = function(event) {

            var resultadoEscucha = event.results[0][0].transcript;
            console.log(resultadoEscucha);
            if (resultadoEscucha != '') {
                console.log('correcto');
                campoRespuesta.value = resultadoEscucha;
            } else {
                console.log("No escuchamos nada. Intentalo de nuevo!");
            }
            console.log('Confidencial: ' + event.results[0][0].confidence);
        }
    }

    reconocimiento.onspeechend = function() {
        reconocimiento.stop();
        escuchaRespuesta.src = 'imagenes/mic.gif';
        activo = false;
    }
    reconocimiento.onerror = function(event) {
        console.log('Algo fallo intentalo de nuevo');
        console.log('error' + event.error);
    }
}

// escuchaRespuesta.addEventListener('click', InsertarRespuesta);

for (let i = 1; i <= 5; i++) {
    escuchaRespuesta[i].addEventListener('click', InsertarRespuesta);
}