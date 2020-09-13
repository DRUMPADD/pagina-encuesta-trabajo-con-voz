<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PRINCIPAL</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>

<?php 
    require('navbar.php');
?>
 
    <div class="container pt-5 text-center">
        <div class="row text-center">
                <div class="card col-sm-6 m-auto">
                    <div class="card-header">
                        <h4>Inserta tus datos</h4>
                    </div>
                    <div class="card-body">
                        <form id="insert-form">
                            <div class="form-group">
                                <input type="text" name="username" id="username" placeholder="Nombre de usuario" autocomplete="off" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" name="name" id="firstname" placeholder="Nombre" autocomplete="off" class="form-control">
                                <!-- <img src="img/mic.gif" id="fname" style="position: absolute; bottom: 52.87%; right: 30px;"> -->
                            </div>
                            <div class="form-group">
                                <input type="text" name="middleName" id="middleName" placeholder="Apellido paterno" autocomplete="off" class="form-control">
                                <!-- <img src="img/mic.gif" id="mName" style="position: absolute; bottom: 37.3%; right: 30px;"> -->
                            </div>
                            <div class="form-group">
                                <input type="text" name="lastName" id="lastName" placeholder="Apellido materno" autocomplete="off" class="form-control">
                                <!-- <img src="img/mic.gif" id="lName" style="position: absolute; bottom: 21.9%; right: 30px;"> -->
                            </div>
                            <button type="submit" id="save" class="btn btn-outline-success btn-block">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 text-center">
            <div class="alert alert-success animate__animated animate__fadeIn" style="background-color: #0ba80be5;
            color: #ffffff;" id="response"></div>
            <div class="alert alert-danger animate__animated animate__fadeIn" style="background-color: #e20a0a;
            color: #ffffff;" id="response2"></div>
        </div>
    </div>


    <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="voz.js"></script>
    <script src="Insertar_voz.js"></script>
    <!-- <script src="user.js"></script> -->
    <script src="Insertar.js"></script>
    <script>
        // let paragraph = 'Hola, ¿cómo estás?';

        // function decir(paragraph) {
        //     speechSynthesis.speak( new SpeechSynthesisUtterance(paragraph));
        // }

        // decir(paragraph);

        const text = 'Hola usuario. Para llenar los campos con tus datos, tienes dos opciones: manualmente o por medio de la voz. Si eliges por medio de la voz, puedes hacerlo empezando a decir cada una de estas frases de acuerdo al campo que desees llenar: Mi nombre de usuario es. Mi nombre es. Mi apellido paterno es. Mi apellido materno es. Después de llenar todos los datos, deberás hacer clic en el botón GUARDAR. Procura hablar fuerte y claro. Si después deseas ir a realizar la encuesta, dime: Ir a la página ENCUESTA. En la esquina derecha superior te dejo un recordatorio para ir a la página que desees.'
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)

    </script>
</body>

</html>