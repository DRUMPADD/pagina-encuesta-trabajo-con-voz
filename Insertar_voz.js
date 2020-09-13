// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

let userName = document.getElementById('username');
let firstName = document.getElementById('firstname');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');

if (annyang) {
    var commands = {
        'Mi nombre de usuario es *usuario': (usuario) => {
            // userName.value = usuario;
            let usuarioCorregido = usuario.replace(/\ /g, "").replace(/arroba/g, "@").toLowerCase();
            userName.value = usuarioCorregido;
            console.log(usuarioCorregido);
        },
        'Mi nombre es *nombre': (nombre) => {
            firstName.value = nombre;
        },
        'Mi apellido paterno es *paterno': (paterno) => {
            middleName.value = paterno;
        },
        'Mi apellido materno es *materno': (materno) => {
                lastName.value = materno;
            }
            // "mi nombre es *nombre y tengo *anios años": (nombre, anios) => {
            //     console.log(`Hola ${nombre} es genial que tu edad sea ${anios} :)`);
            // }
    }

}

annyang.addCommands(commands);

annyang.setLanguage('es-MX');
// annyang.setLanguage('es-EN');
annyang.start();