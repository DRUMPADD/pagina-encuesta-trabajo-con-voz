$(document).ready(function() {

    $('thead').hide();
    $('#info').hide();
    $('#btnSearch').click(function(e) {
        const userName = $('#userN').val();
        $.ajax({
            url: 'app-search.php',
            // url2: 'app-search2.php',
            type: 'POST',
            data: { userName },
            success: function(response) {
                // console.log(response);
                let resp = JSON.parse(response);
                console.log(resp);
                let template = '';
                if (resp.length) {
                    resp.forEach(elements => {
                        template += `
                        <div class="form-group">
                            <label>Nombre de usuario: ${elements.user_name}</label>
                        </div>
                        <div class="form-group">
                            <label>Nombre: ${elements.name}</label>
                        </div>
                        <div class="form-group">
                            <label>Apellido paterno: ${elements.middleName}</label>
                        </div>
                        <div class="form-group">
                            <label>Apelido materno: ${elements.lastName}</label>
                        </div>
                        `;
                    });

                    $('#datos').html(template);
                    $('#info').show();
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance('Usuario encontrado')
                    synth.speak(utterThis)

                    const synth2 = window.speechSynthesis
                    const utterThis2 = new SpeechSynthesisUtterance('Gracias por haber realizado la encuesta. Eso es todo. Sí deseas, puedes regresar a la página PRINCIPAL por medio la frase: IR A PÄGINA PRINCIPAL')
                    synth2.speak(utterThis2)
                } else {
                    template += `
                        <div class="form-group">
                            <label>No se encontró el usuario o no existe</label>
                        </div>
                        `;
                    $('#datos').html(template);
                    $('#info').show();
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance('No se encontró el usuario o no existe.')
                    synth.speak(utterThis)
                }
            }
        });

        $.ajax({
            url: 'app-search2.php',
            type: 'POST',
            data: { userName },
            success: function(response) {
                // console.log(response);
                let resp = JSON.parse(response);
                console.log(resp);
                let template = '';
                if (resp.length) {
                    resp.forEach(elements => {
                        template += `
                    <tr>
                        <th scope="row" class="text-center">${elements.id_pregunta}</th>
                        <td class="text-justify">${elements.titulo_pregunta}</td>
                        <td class="text-justify">${elements.respuesta}</td>   
                    </tr>
                    `;
                    });
                    $('#answers').html(template);
                    $('thead').show();
                } else {
                    let template2 = '';
                    template2 += `
                    <tr>
                        <th colspan="3"  class="text-center">No ha respondido la encuesta</th>   
                    </tr>
                    `;
                    $('#answers').html(template2);
                    $('thead').show();
                    console.log('Segunda opción');
                    const synth = window.speechSynthesis
                    const utterThis = new SpeechSynthesisUtterance('Encuesta no contestada')
                    synth.speak(utterThis)
                }
            }
        });
        e.preventDefault();

    });
    // $('#task-form').html(template);
});