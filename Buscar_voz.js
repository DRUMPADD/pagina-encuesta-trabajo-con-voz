let user = document.getElementById('userN');

if (annyang) {
    const loguearComandoReconocido = contenido => {
        $comandosReconocidos.innerHTML += contenido + "<br>";
    };

    let comandos = {
        // 'Buscar usuario *usuario': (usuario) => {
        //     user.value = usuario;
        // },
        "Buscar usuario *usuario": usuario => {
            let usuarioCorregido = usuario.replace(/\ /g, "").replace(/arroba/g, "@").toLowerCase();
            user.value = usuarioCorregido;
            console.log(`Originalmente es ${usuario} pero creo que el correcto es ${usuarioCorregido}`);
        }
    };
    annyang.addCommands(comandos);
    annyang.setLanguage('es-MX');
    annyang.start();
}