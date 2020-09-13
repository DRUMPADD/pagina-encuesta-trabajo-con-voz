var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

// var firstName = document.querySelector('#user');
// var escuchaUser = document.querySelector('#escuchaUser');

var respuesta1 = document.querySelector('#answer1');
var escuchaRespuesta1 = document.querySelector('#r1');

var respuesta2 = document.querySelector('#answer2');
var escuchaRespuesta2 = document.querySelector('#r2');

var respuesta3 = document.querySelector('#answer3');
var escuchaRespuesta3 = document.querySelector('#r3');

var respuesta4 = document.querySelector('#answer4');
var escuchaRespuesta4 = document.querySelector('#r4');

var respuesta5 = document.querySelector('#answer5');
var escuchaRespuesta5 = document.querySelector('#r5');

let active = false;
var escucho;



function voiceTranscript(currentField, fieldImage) {

    console.log("voiceTranscript");

    let speechRecognition = new SpeechRecognition();

    speechRecognition.lang = 'es-MX';
    speechRecognition.interimResults = false;
    speechRecognition.maxAlternatives = 1;

    speechRecognition.start();

    speechRecognition.onresult = function(event) {

        let ListeningResult = event.results[0][0].transcript;

        // textError.textContent = ListeningResult;

        if (ListeningResult != '') {

            console.log('correcto');

            currentField.value = ListeningResult;

        } else {

            // textError.textContent = "No escuchamos nada. Intentalo de nuevo!"

        }

        // console.log('Confidencial: ' + event.results[0][0].confidence);
    }

    speechRecognition.onspeechend = function() {
        speechRecognition.stop();

        fieldImage.src = 'img/mic.gif';

        active = false;
    }

    speechRecognition.onerror = function(event) {
        // textError.textContent = 'Algo fallo intentalo de nuevo';
        console.log('error' + event.error);
    }
}

function listenAnswer1(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaRespuesta1.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaRespuesta1.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(respuesta1, escuchaRespuesta1);
    }

}

function listenAnswer2(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaRespuesta2.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaRespuesta2.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(respuesta2, escuchaRespuesta2);
    }

}

function listenAnswer3(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaRespuesta3.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaRespuesta3.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(respuesta3, escuchaRespuesta3);
    }

}

function listenAnswer4(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaRespuesta4.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaRespuesta4.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(respuesta4, escuchaRespuesta4);
    }

}

function listenAnswer5(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaRespuesta5.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaRespuesta5.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(respuesta5, escuchaRespuesta5);
    }

}

escuchaRespuesta1.addEventListener('click', listenAnswer1);
escuchaRespuesta2.addEventListener('click', listenAnswer2);
escuchaRespuesta3.addEventListener('click', listenAnswer3);
escuchaRespuesta4.addEventListener('click', listenAnswer4);
escuchaRespuesta5.addEventListener('click', listenAnswer5);