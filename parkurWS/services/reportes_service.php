<?php

include_once('../config/db.php');
include_once('../classes/usuario.php');

$opcion = $_GET['opcion'];
$body = json_decode(file_get_contents("php://input"));

switch ($opcion) {
    case 'getUsuarios':
        echo json_encode(Usuario::getUsuarios());
        break;

    case 'addUpdateUsuario':
        echo json_encode(Usuario::addUpdateUsuario($body));
        break;

    case 'getGeneros':
        echo json_encode(Usuario::getGeneros());
        break;

}
?>