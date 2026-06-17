<?php
class Avion {

public int $id;
public string $modelo;
public string $informacion;

function __construct($id, $modelo, $informacion)
{
    $this->id = $id;
    $this->modelo = $modelo;
    $this->informacion = $informacion;
}

public function getId()
{
    return $this->id;
}

public function getModelo()
{
    return $this->modelo;
}

public function getInformacion()
{
    return $this->informacion;
}

}
?>
