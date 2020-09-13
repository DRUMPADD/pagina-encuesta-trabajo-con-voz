<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BUSCAR</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <?php
        require("navbar.php")
    ?>
        <center>
            <div class="form-group card bg-dark m-auto container">
                <form>
                    <h2 class="text-white mt-2 font-weight-bold">Buscar usuario</h2>
                    <input type="text" id="userN" autocomplete="off" class="mt-3 form-control col-sm-3 " placeholder="Nombre de usuario"><br>
                    <button id="btnSearch" class="btn btn-success my-2 my-sm-3" type="submit">Buscar</button>
                </form>
            </div>
        </center>
        <div class="container p-5">
            <div class="row">
                <div class="col-md-5">
                    <div class="card" id="info">
                        <div class="card-body" id="datos">
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered table-sm">
                        <thead class="thead-dark">
                            <tr class="text-center">
                                <th scope="col">Num.</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Respuesta</th>
                            </tr>
                        </thead>
                        <tbody id="answers" class="bg-light">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="voz.js"></script>
        <script src="Buscar_voz.js"></script>
        <script src="search.js"></script>
        <script>
            const text = 'Para buscar tu usuario, puedes hacerlo usando la siguiente frase: Buscar usuario (nombre de usuario). Luego, haz clic en el botón BUSCAR.';
            const synth = window.speechSynthesis
            const utterThis = new SpeechSynthesisUtterance(text)
            synth.speak(utterThis)
        </script>
</body>

</html>