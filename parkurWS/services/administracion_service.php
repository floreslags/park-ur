<?php

include_once('../config/db.php');
include_once('../classes/admin.php');
include_once('../classes/cliente.php');
include_once('../classes/renta.php');


$opcion = $_GET['opcion'];
$body = json_decode(file_get_contents("php://input"));

switch ($opcion) {

    case 'getUsuarios':
        echo json_encode(Admin::getUsuarios());
        break;

    case 'getUsuario':
        echo json_encode(Admin::getUsuario($body));
        break;

    case 'addUsuario':
        echo json_encode(Admin::addUsuario($body));
        break;

    case 'updateUsuario':
        echo json_encode(Admin::updateUsuario($body));
        break;

    case 'deleteUsuario':
        echo json_encode(Admin::deleteUsuario($body));
        break;

    case 'getClientes':
        echo json_encode(Cliente::getClientes());
        break;

    case 'getRentas':
        echo json_encode(Renta::getRentas());
        break;

}
?>