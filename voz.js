let principalPage = document.getElementById('principal');
let encuestaPage = document.getElementById('encuesta');
let buscarPage = document.getElementById('buscar');

if (annyang) {
    var commands = {
        'Ir a página principal': principal,
        'Ir a página encuesta': encuesta,
        'Ir a página buscar': buscar,
        'Ir a la página principal': principal,
        'Ir a la página encuesta': encuesta,
        'Ir a la página buscar': buscar,
        'Hola': function() {
            console.log('Hello');
        }
    }
}

function principal() {
    document.location = principalPage;
}

function encuesta() {
    document.location = encuestaPage;
}

function buscar() {
    document.location = buscarPage;
}

annyang.addCommands(commands);
annyang.setLanguage('es-MX');
annyang.start();