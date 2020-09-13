let user = document.getElementById('user');
let respuesta1 = document.getElementById('answer1');
let respuesta2 = document.getElementById('answer2');
let respuesta3 = document.getElementById('answer3');
let respuesta4 = document.getElementById('answer4');
let respuesta5 = document.getElementById('answer5');

if (annyang) {
    let comandos = {
        'Mi usuario es *usuario': usuario => {
            let usuarioCorregido = usuario.replace(/\ /g, "").replace(/arroba/g, "@").toLowerCase();
            user.value = usuarioCorregido;
        },
        'Respuesta uno es *uno': (uno) => {
            respuesta1.value = uno;
        },
        'Respuesta dos es *dos': (dos) => {
            respuesta2.value = dos;
        },
        'Respuesta tres es *tres': (tres) => {
            respuesta3.value = tres;
        },
        'Respuesta cuatro es *cuatro': (cuatro) => {
            respuesta4.value = cuatro;
        },
        'Respuesta cinco es *cinco': (cinco) => {
            respuesta5.value = cinco;
        }
    };

    annyang.addCommands(comandos);
    annyang.setLanguage('es-MX');
    annyang.start();
}