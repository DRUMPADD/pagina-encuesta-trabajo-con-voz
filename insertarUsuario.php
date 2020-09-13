<?php
    include "conexion.php";

    if(isset($_POST['username'])) {
        $userName = $_POST['username'];
        $name = $_POST['name'];
        $middleName = $_POST['middleName'];
        $lastName = $_POST['lastName'];
        $existeUser = "SELECT * from usuario where nombre_usuario = '$userName'";
        $existe = mysqli_query($conectar,$existeUser);
        if(mysqli_num_rows($existe) == 0) {
            if($userName != NULL && $name != NULL && $middleName != NULL && $lastName != NULL) {
                $consulta = "INSERT INTO usuario (nombre_usuario,Nombre,Apellido_p,Apellido_m) values('$userName','$name','$middleName','$lastName')";
                $response = mysqli_query($conectar,$consulta);  
                
                if($response) {
                    echo "Datos almacenados";
                } else {
                    echo "Algo salió mal";
                }
            } else {
                echo "Debe llenar todos los campos";
            }
        } else {
            echo "El usuario ya existe";
        }
    } else {
        echo "Se requiere de un nombre de usuario";
    }
?>