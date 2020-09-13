<?php 
    include "conexion.php";

    $userN = $_POST['userName'];
    if(!empty($userN)){
        $query2 = "SELECT  * from respuesta r, preguntas p, usuario u where r.nombre_usuario = u.nombre_usuario and r.id_p = p.id and r.nombre_usuario = '$userN'";
        $res = mysqli_query($conectar,$query2);
        if($res) {
            $json2 = array();
            while($response = $res->fetch_array()){
                $json2[] = array(
                    'id_pregunta' => $response['id_p'],
                    'titulo_pregunta' => $response['titulo'],
                    'respuesta' => $response['resp']
                );
            };
            $jsonString2 = json_encode($json2);
            echo $jsonString2;
        }else {
            echo "Algo salió mal";
        }
    }
?>