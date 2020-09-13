<?php 
    include "conexion.php";

    if(isset($_POST['userName'])){
        $user = $_POST['userName'];
        $exisUsuario = "SELECT * from usuario where nombre_usuario = '$user'";
        $existe = mysqli_query($conectar,$exisUsuario);
        if(mysqli_num_rows($existe) == 1){ 
            $search = "SELECT id from preguntas";
            $busqueda = mysqli_query($conectar,$search);
            $row = mysqli_num_rows($busqueda);
            $x = 1;
            $existeRespuesta = mysqli_query($conectar,"SELECT * from respuesta where nombre_usuario = '$user'");
            $respuestas = mysqli_num_rows($existeRespuesta);
            if($respuestas == 0){
                $resp1 = $_POST['answer1'];
                $users = "INSERT INTO respuesta (nombre_usuario, id_p, resp) values('$user',1,'$resp1')";
                $respuesta1 = mysqli_query($conectar,$users);
                    
                $resp2 = $_POST['answer2'];
                $users = "INSERT INTO respuesta (nombre_usuario, id_p, resp) values('$user',2,'$resp2')";
                $respuesta2 = mysqli_query($conectar,$users);
                    
                $resp3 = $_POST['answer3'];
                $users = "INSERT INTO respuesta (nombre_usuario, id_p, resp) values('$user',3,'$resp3')";
                $respuesta3 = mysqli_query($conectar,$users);
                    
                $resp4 = $_POST['answer4'];
                $users = "INSERT INTO respuesta (nombre_usuario, id_p, resp) values('$user',4,'$resp4')";
                $respuesta4 = mysqli_query($conectar,$users);
                    
                $resp5 = $_POST['answer5'];
                $users = "INSERT INTO respuesta (nombre_usuario, id_p, resp) values('$user',5,'$resp5')";
                $respuesta5 = mysqli_query($conectar,$users);
                
                if($respuesta1 && $respuesta2 && $respuesta3 && $respuesta4 && $respuesta5) {
                    echo 'Encuesta realizada';

                }else {
                    echo 'No se realizó la encuesta';
                }
            }else {
                echo 'Ya ha respondido la encuesta';
            }
        } else {
            echo 'El usuario no existe';
        }
    } else {
        echo 'Se requiere de un nombre de usuario';
    }
?>