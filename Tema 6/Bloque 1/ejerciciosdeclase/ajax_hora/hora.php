<?php
sleep(3); // Metemos un retardo intencionado de 3sg para que el servidor se demore en dar la respuesta
header('Content-Type: text/plain; charset=utf-8'); 
echo "The time is " . date("h:i:sa");
