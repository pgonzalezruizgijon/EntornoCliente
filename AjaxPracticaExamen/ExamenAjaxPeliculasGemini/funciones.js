addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    // 1. Cargamos los géneros al entrar
    cargarGeneros();
    // 2. Cargamos todas las películas por defecto al entrar
    cargarPeliculas();

    // 3. Cuando el usuario cambie el género, filtramos la tabla
    document.getElementById('inputGenero').addEventListener('change', cargarPeliculas);
}

function cargarGeneros() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/cargar_generos_json.php', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            let generos = JSON.parse(xhr.responseText);
            let select = document.getElementById('inputGenero');
            
            // Mantenemos la opción "Todos" por defecto
            select.innerHTML = "<option value=''>Todos</option>";

            generos.forEach(genero => {
                let option = document.createElement('option');
                // Según Genero.php, el atributo se llama 'nombre'
                option.value = genero.nombre;
                option.textContent = genero.nombre;
                select.appendChild(option);
            });
        }
    };
    xhr.send();
}

function cargarPeliculas() {
    let genero = document.getElementById('inputGenero').value;
    const xhr = new XMLHttpRequest();
    
    // Construimos la URL con el parámetro de filtro

    let url = 'api/cargar_peliculas_xml.php';
    if (genero !== "") {
        url += '?genero=' + genero;
    }

    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status == 200) {
            let xml = xhr.responseXML;
            let peliculas = xml.getElementsByTagName('pelicula');
            let tabla = document.getElementById('inputTabla');
            tabla.innerHTML = ""; // Limpiamos la tabla

            for (let i = 0; i < peliculas.length; i++) {
                // Extraemos los datos del XML [cite: 45, 52]
                let titulo = peliculas[i].getElementsByTagName('titulo')[0].textContent;
                let anio = peliculas[i].getElementsByTagName('anio')[0].textContent;
                let gen = peliculas[i].getElementsByTagName('genero')[0].textContent;
                let poster = peliculas[i].getElementsByTagName('poster')[0].textContent;
                let sinopsis = peliculas[i].getElementsByTagName('sinopsis')[0].textContent;

                // Creamos la fila (tr)
                let fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${titulo}</td>
                    <td>${anio}</td>
                    <td>${gen}</td>
                    <td><img src="${poster}" width="100"></td>
                    <td><button type="button" class="btn btn-warning btn-detalles">Detalles</button></td>
                `;

                // Programamos el botón de detalles
                // Guardamos la sinopsis en el botón usando un atributo "data"
                let boton = fila.querySelector('.btn-detalles');
                boton.addEventListener('click', () => {
                    document.getElementById('inputTrama').textContent = sinopsis;
                });

                tabla.appendChild(fila);
            }
        }
    };
    xhr.send();
}