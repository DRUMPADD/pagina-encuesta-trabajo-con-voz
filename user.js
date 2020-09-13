var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var firstName = document.querySelector('#firstname');
var escuchaName = document.querySelector('#fname');

var middleName = document.querySelector('#middleName');
var escuchaMName = document.querySelector('#mName');

var lastName = document.querySelector('#lastName');
var escuchaLName = document.querySelector('#lName');


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


        }
    }
}

function listenName(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaName.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaName.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(firstName, escuchaName);
    }

}

function listenMiddleName(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaMName.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaMName.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(middleName, escuchaMName);
    }

}

function listenLastName(e) {

    e.preventDefault();

    console.log("ListenName");

    if (active) {
        console.log("mic is not active");
        escuchaLName.src = 'img/mic.gif';
        active = false;
    } else {
        console.log("mic is active");
        escuchaLName.src = 'img/mic-animate.gif';
        active = true;
        voiceTranscript(lastName, escuchaLName);
    }

}

escuchaName.addEventListener('click', listenName);
escuchaMName.addEventListener('click', listenMiddleName);
escuchaLName.addEventListener('click', listenLastName);