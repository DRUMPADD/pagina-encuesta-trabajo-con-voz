$(document).ready(function() {
    $('#message').hide();
    $('#message2').hide();
    $('#save').click(function(e) {
        $.ajax({
            type: "POST",
            url: "insertarRespuesta.php",
            data: $('#encuesta-form').serialize(),
            success: function(response) {
                $('#encuesta-form').trigger('reset');
                console.log(response);
                if (response == 'Encuesta realizada') {
                    $('#message').html(response);
                    $('#message').show();
                    $('#message2').hide();

                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance('Encuesta realizada.')
                    synth.speak(utterThis)
                    const synth2 = window.speechSynthesis
                    const utterThis2 = new SpeechSynthesisUtterance('Ahora, puedes dirigirte a la página BUSCAR para observar tus datos personales y tus respuestas. Para esto, usa la frase: IR A PÁGINA BUSCAR.')
                    synth2.speak(utterThis2)
                } else {
                    $('#message2').html(response);
                    $('#message2').show();
                    $('#message').hide();
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance(response)
                    synth.speak(utterThis)
                }

            }
        });

        e.preventDefault();
    });
});