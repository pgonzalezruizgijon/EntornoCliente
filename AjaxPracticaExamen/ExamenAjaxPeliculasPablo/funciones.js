addEventListener('load', inicializarEventos,false);

function inicializarEventos() {
    cargarGeneros();
    cargarPeliculas();
    document.getElementById('inputGenero').addEventListener('change', cargarPeliculas);
}

function cargarGeneros(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/cargar_generos_json.php', true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            
            let generos = JSON.parse(xhr.responseText);
            let select = document.getElementById('inputGenero');

            select.innerHTML = "<option value=''>Todos</option>"

            generos.forEach(genero=> {

                let nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = genero.nombre;
                nuevaOpcion.textContent = genero.nombre;
                select.appendChild(nuevaOpcion);

            });
        }
    };
    xhr.send();
}

function cargarPeliculas(e) {
    
    let genero = document.getElementById("inputGenero").value;

    const xhr = new XMLHttpRequest();

    // Esto es para que si no se pone nada, se cargue todos por el $where de cargar_peliculas_xml.php
    let url = 'api/cargar_peliculas_xml.php'
    if (genero !== "") {
        url += '?genero=' + genero;
    }
    xhr.open('GET', url, true);

    xhr.onload = () =>{
        if (xhr.status >= 200 && xhr.status < 300) {
            let xml = xhr.responseXML;

            let listaPeliculas = xml.getElementsByTagName("pelicula");

            let tablaPeliculas = document.getElementById("inputTabla");
            tablaPeliculas.innerHTML = "";

            for (let i = 0; i < listaPeliculas.length; i++) {

                let titulo = listaPeliculas[i].getElementsByTagName("titulo")[0].textContent;
                let anio = listaPeliculas[i].getElementsByTagName("anio")[0].textContent;
                let genero = listaPeliculas[i].getElementsByTagName("genero")[0].textContent;
                let poster = listaPeliculas[i].getElementsByTagName("poster")[0].textContent;
                let sinopsis = listaPeliculas[i].getElementsByTagName("sinopsis")[0].textContent;

                let fila = document.createElement('tr');
                fila.innerHTML = `
                <td>${titulo}</td>
                <td>${anio}</td>
                <td>${genero}</td>
                <td><img src="${poster}" width="100"></td>
                <td><button type="button" class="btn btn-warning btn-detalles">Detalles</button></td>
                `;

                let boton = fila.querySelector('.btn-detalles');
                boton.addEventListener('click', () => {
                    document.getElementById('inputTrama').textContent = sinopsis;
                });

                tablaPeliculas.appendChild(fila);

            }
        }
    }
    xhr.send();

}