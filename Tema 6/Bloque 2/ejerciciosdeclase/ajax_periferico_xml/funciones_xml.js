addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    let ob = document.getElementById('boton1');
    ob.addEventListener('click', cargarPerifericos, false);
}


function cargarPerifericos() {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let xml = xhr.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
                let perifericos = xml2perifericos(xml);
                console.log(perifericos);
                poblarPerifericos(perifericos);
            } catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
        }
    };
    xhr.onloadstart = () => {
        document.getElementById("resultados").innerHTML = "Cargando...";
    };
    xhr.open('GET', 'perifericos_xml.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
    }
    xhr.send();
}

// Convierte el objeto XML en un array de objetos literales con la estructura
// [
//   {codigo:<codigo>, descripcion:<descripcion>, precio: <precio>},
//   {codigo:<codigo>, descripcion:<descripcion>, precio: <precio>},
//   {codigo:<codigo>, descripcion:<descripcion>, precio: <precio>},
// ]
function xml2perifericos(xml) {
    let perifericos = xml.getElementsByTagName("periferico");
    let json = [];
    for (let i = 0; i < perifericos.length; i++) {
        let periferico = perifericos[i];
        let codigo = periferico.getElementsByTagName("codigo")[0].textContent;
        let descripcion = periferico.getElementsByTagName("descripcion")[0].textContent;
        let precio = periferico.getElementsByTagName("precio")[0].textContent;
        json.push({ codigo: codigo, descripcion: descripcion, precio: precio });
    }
    return json;
}

// Función para mostrar por pantalla el listado de periféricos
// Parámetros:
//   - perfifericos: array de objetos {codigo:<codigo>, descripcion:<descripcion>, precio:<precio>}
function poblarPerifericos(perifericos) {
    let salida = "";
    for (let f = 0; f < perifericos.length; f++) {
        let periferico = perifericos[f];
        salida += 'Codigo: ' + periferico.codigo + "<br>";
        salida += 'Descripcion: ' + periferico.descripcion + "<br>";
        salida += 'Precio: ' + periferico.precio + "<br><br>";
    }
    document.getElementById("resultados").innerHTML = salida;
}
