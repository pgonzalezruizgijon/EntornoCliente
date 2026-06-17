<?php
class Zona {

public int $id;
public string $top_pos;
public string $left_pos;
public string $width_pos;
public string $height_pos;
public int $avion_id;
public string $modelo;

function __construct($id, $top_pos, $left_pos, $width_pos, $height_pos, $avion_id, $modelo)
{
    $this->id = $id;
    $this->top_pos = $top_pos;
    $this->left_pos = $left_pos;
    $this->width_pos = $width_pos;
    $this->height_pos = $height_pos;
    $this->avion_id = $avion_id;
    $this->modelo = $modelo;
}

public function getId()
{
    return $this->id;
}

public function getTopPos()
{
    return $this->top_pos;
}

public function getLeftPos()
{
    return $this->left_pos;
}

public function getWidthPos()
{
    return $this->width_pos;
}

public function getHeightPos()
{
    return $this->height_pos;
}

public function getAvionId()
{
    return $this->avion_id;
}

public function getModelo()
{
    return $this->modelo;
}

}
?>
