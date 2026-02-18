/*  Cargar las plataformas en el select al iniciar (JSON).
Cargar todos los juegos al iniciar y cada vez que cambie el select (XML).
Hacer que el botón de la tabla muestre la descripción en el cuadro de la derecha. */

addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    cargarPlataformas();
    cargarJuegos();
    document.getElementById('selectorPlataforma').addEventListener('change', cargarJuegos);
}

function cargarPlataformas(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/get_plataformas_json.php', true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            let plataformas = JSON.parse(xhr.responseText);
            let select = document.getElementById('selectorPlataforma');

            select.innerHTML = "<option value =''>Todos</option>";

            plataformas.forEach(item=>{

                let nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = item.plataforma;
                nuevaOpcion.textContent = item.plataforma;
                select.appendChild(nuevaOpcion);

            });
        }
    };
    xhr.send();
}

function cargarJuegos(e) {
    
    let plataforma = document.getElementById("selectorPlataforma").value;

    const xhr = new XMLHttpRequest();

    let url = 'api/get_juegos_xml.php';
    if (plataforma!== "") {
        url += '?plataforma=' + plataforma;
    }
    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            let xml = xhr.responseXML;

            let listaJuegos = xml.getElementsByTagName("juego");

            let tablaJuegos = document.getElementById("tablaJuegos");
            tablaJuegos.innerHTML = "";

            for (let i = 0; i < listaJuegos.length; i++) {
                let titulo = listaJuegos[i].getElementsByTagName("titulo")[0].textContent;
                let anio = listaJuegos[i].getElementsByTagName("anio")[0].textContent;
                let compania = listaJuegos[i].getElementsByTagName("compania")[0].textContent;
                let imagen = listaJuegos[i].getElementsByTagName("imagen")[0].textContent;
                let descripcion = listaJuegos[i].getElementsByTagName("descripcion")[0].textContent;

                let fila = document.createElement('tr');
                fila.innerHTML = `
                <td>${titulo}</td>
                <td>${anio}</td>
                <td>${compania}</td>
                <td><img src="${imagen}" width="100"></td>
                <td><button type="button" class="btn btn-warning btn-detalles">Detalles</button></td>
                `;

                let boton = fila.querySelector('.btn-detalles');
                boton.addEventListener('click', () => {
                    document.getElementById('cajaDescripcion').textContent = descripcion;
                });

                tablaJuegos.appendChild(fila);

            }
        }
    };
    xhr.send();

}