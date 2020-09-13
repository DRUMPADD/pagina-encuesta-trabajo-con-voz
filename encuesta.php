<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENCUESTA</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/styles2.css">
    <style>
        .pregunta input {
            width: 90%;
        }
    </style>
    <script>
        const text = 'Para poder llenar los campos mediante la voz, puedes usar las siguientes frases de acuerdo al campo: Mi usuario es. Respuesta (número de la pregunta), por ejemplo: Respuesta uno es. Una vez escrito su nombre de usuario y respondidas las preguntas, haga clic en el botón GUARDAR.'
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
    </script>
</head>

<body>
    <?php
        require("navbar.php")
    ?>
    <div class="container cont">
        <div class="card col-sm-9">
        <div class="pt-10">
            <form method="POST" class="card-body" id="encuesta-form">
                <h4 class="text-center">Realizar encuesta</h4>
                <!-- <div id="mensaje_lleno" class="alert alert-info animate__animated animate__fadeIn text-center">Puede responder mediante la voz o manualmente. <br>Una vez respondidas las preguntas haga clic en GUARDAR</div> -->
                <!-- <h5 class="pt-2">Escriba su nombre de usuario</h5> -->
                <div class="form-inline w-100">
                    <input type="text" name="userName" id="user" autocomplete="off" placeholder="Nombre de usuario" class="inp form-control ">
                </div>
                
                <!-- <img src="img/mic.gif" id="escuchaUser"> -->
                
                <!-- <p>Para responder mediante la voz haga click en el ícono del microfono</p> -->
                <div class="form-group">
                <?php
                    include "conexion.php";
                    
                    $x = 0;
                    $query1 = "SELECT * from preguntas where id = 1";
                    $res1 = mysqli_query($conectar,$query1);
                    $query2 = "SELECT * from preguntas where id = 2";
                    $res2 = mysqli_query($conectar,$query2);
                    $query3 = "SELECT * from preguntas where id = 3";
                    $res3 = mysqli_query($conectar,$query3);
                    $query4 = "SELECT * from preguntas where id = 4";
                    $res4 = mysqli_query($conectar,$query4);
                    $query5 = "SELECT * from preguntas where id = 5";
                    $res5 = mysqli_query($conectar,$query5);

                    while($resp = $res1->fetch_array()){
                ?>
                
                    
                        <div class="pregunta">
                            <label class="mt-2"><?php echo $resp['id']?>.- <?php echo $resp['titulo']?></label>
                            <br>
                            <input type="text" name="answer1" id="answer1" placeholder="Respuesta" autocomplete="off" class="form-control">
                            <!-- <img src="img/mic.gif" id="r1"> -->
                        </div>
                    
                <?php
                    }
                    while($resp = $res2->fetch_array()){
                ?>
                
                    
                        <div class="pregunta">
                            <label class="mt-2"><?php echo $resp['id']?>.- <?php echo $resp['titulo']?></label>
                            <br>
                            <input type="text" name="answer2" id="answer2" placeholder="Respuesta" autocomplete="off" class="form-control">
                            <!-- <img src="img/mic.gif" id="r2"> -->
                        </div>
                    
                <?php
                    }

                    while($resp = $res3->fetch_array()){
                ?>
                
                    
                        <div class="pregunta">
                            <label class="mt-2"><?php echo $resp['id']?>.- <?php echo $resp['titulo']?></label>
                            <br>
                            <input type="text" name="answer3" id="answer3" placeholder="Respuesta" autocomplete="off" class="form-control">
                            <!-- <img src="img/mic.gif" id="r3"> -->
                        </div>
                    
                <?php
                    }
                
                    while($resp = $res4->fetch_array()){
                ?>
                
                   
                        <div class="pregunta">
                            <label class="mt-2"><?php echo $resp['id']?>.- <?php echo $resp['titulo']?></label>
                            <br>
                            <input type="text" name="answer4" id="answer4" placeholder="Respuesta" autocomplete="off" class="form-control">
                            <!-- <img src="img/mic.gif" id="r4"> -->
                        </div>
                <?php
                    }

                    while($resp = $res5->fetch_array()){
                ?>
                
                    
                        <div class="pregunta">
                            <label class="mt-2"><?php echo $resp['id']?>.- <?php echo $resp['titulo']?></label>
                            <br>
                            <input type="text" name="answer5" id="answer5" placeholder="Respuesta" autocomplete="off" class="form-control">
                            <!-- <img src="img/mic.gif" id="r5"> -->
                        </div>
                <?php
                    }
                ?>
                        <div class="alert alert-success animate__animated animate__fadeIn" id="message"></div>
                        <div class="alert alert-danger animate__animated animate__fadeIn" id="message2"></div>
                        <button type="submit" name="enviar" id="save" class="btn btn-primary btn-block mt-2 mb-0">Guardar</button>
                    </div>    
                </div>
            </form>
        </div>
        </div>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="voz.js"></script>
    <script src="Encuesta_voz.js"></script>
    <script src="Encuesta.js"></script>
    <!-- <script src="main.js"></script> -->
</body>

</html>