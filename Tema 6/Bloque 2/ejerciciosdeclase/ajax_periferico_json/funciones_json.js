addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('boton1').addEventListener('click', cargarPerifericos);
}

function cargarPerifericos(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'perifericos_json.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
    };
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let perifericos = JSON.parse(xhr.responseText); // Los datos JSON se recuperan al igual que el texto plano
                console.log(perifericos);
                mostrarPerifericos(perifericos);
            } catch (ex) {
                document.querySelector("#resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }
        } else {
            // Se ha recibido un código status de error
            document.querySelector("#resultados").innerHTML = "Error al cargar los datos";
        }
    };
    xhr.onloadstart = () => {
        document.querySelector("#resultados").innerHTML = "Cargando...";
    };
    xhr.send();
}


// Función para mostrar por pantalla el listado de periféricos
// Parámetros:
//   - perfifericos: array de objetos {codigo:<codigo>, descripcion:<descripcion>, precio:<precio>}
function mostrarPerifericos(perifericos) {
    let salida = "";
    for (let f = 0; f < perifericos.length; f++) {
        let periferico = perifericos[f];
        salida += `Codigo: ${periferico.codigo}<br>`;
        salida += `Descripcion: ${periferico.descripcion}<br>`;
        salida += `Precio: ${periferico.precio}<br><br>`;
    }
    document.querySelector("#resultados").innerHTML = salida;
}

