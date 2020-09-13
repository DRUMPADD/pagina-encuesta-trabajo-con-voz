$(document).ready(function() {
    console.log('Working');
    $('#response').hide();
    $('#response2').hide();
    $('#save').click(function(e) {
        $.ajax({
            url: 'insertarUsuario.php',
            type: 'POST',
            data: $('#insert-form').serialize(),
            success: function(response) {

                $('#insert-form').trigger('reset');
                if (response == 'Datos almacenados') {
                    $('#response').html(response);
                    $('#response').show();
                    $('#response2').hide();
                    // e.preventDefault();
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance('Tus datos han sido almacenados')
                    synth.speak(utterThis)
                    const synth2 = window.speechSynthesis
                    const utterThis2 = new SpeechSynthesisUtterance('Ahora, puedes dirigirte a la página ENCUESTA para realizar la encuesta, o bien, ir a la página BUSCAR para observar tus datos.')
                    synth2.speak(utterThis2)
                } else {
                    $('#response2').html(response);
                    $('#response2').show();
                    $('#response').hide();
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance(response)
                    synth.speak(utterThis)
                        // e.preventDefault();
                }
            }
        });
        e.preventDefault();
    });
});