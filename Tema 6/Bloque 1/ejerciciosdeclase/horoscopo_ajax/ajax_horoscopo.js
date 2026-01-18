addEventListener('load', inicializarEventos);

function inicializarEventos() {
  // Añadimos un manejador de eventos compartido para todos los hiperenlaces en el HTML
  for (var f = 1; f <= 13; f++) {
    var ob = document.getElementById('enlace' + f);
    ob.addEventListener('click', presionEnlace);
  }
}

function presionEnlace(e) {
  e.preventDefault(); // Cancela la acción del hiperenlace. Solo queremos rescatar el atributo href y con dicha información realizar la petición AJAX
  var url = e.target.getAttribute('href'); // En la variable url tendremos algo similar a "pagina1.php?cod=4"
  cargarHoroscopo(url);
}


// La siguiente función realiza la petición Ajax
function cargarHoroscopo(url) {
  let xhr = new XMLHttpRequest();  // Creamos una instancia del objeto Ajax
  let soloUrl = url.split("?")[0];
  let parametro = url.split("?")[1];
  xhr.open("POST", soloUrl, true); // Petición asíncrona de tipo GET. Los parámetros irán en la propia url
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // El objeto ajax dispara el event onload cuando llegan completamente los datos del servidor
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) { // Las respuestas del servidor con status 200-299 se consideran exitosas
      document.querySelector("#detalles").textContent = xhr.responseText;
    } else {
      // Este código se ejecutará si el servidor responde con un código status de error (p.ej. 500)
      document.querySelector("#detalles").textContent = `Error al cargar los datos (HTTP ${xhr.status})`;
    }
  };
  // El objeto ajax dispara el evento onloadstart al comienzo de la descarga de datos del servidor
  // Sirve para colocar un texto de espera al usuario o un gif animado de progreso
  xhr.onloadstart = () => {
    document.querySelector("#detalles").textContent = 'Cargando...';
  };
  xhr.timeout=3000; // Tiempo máximo de espera de la respuesta del servidor. Si vence este tiempo el objeto ajax dispara el evento ontimeot
  xhr.ontimeout = ()=>{ // El evento ontimeout se dispara si se supera el valor indicado en el timeout
     document.querySelector("#detalles").textContent = 'Se ha superado el tiempo máximo de espera ...';
  };
  xhr.onerror = ()=>{
     document.querySelector("#detalles").textContent = 'Hubo un error en la conexión con el servidor ...';
  }
  xhr.send(parametro);
}
