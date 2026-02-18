addEventListener('load', inicializarEventos, false);

function inicializarEventos() {

    cargarComunidades();

    document.getElementById('comunidades').addEventListener('change', cargarProvincias);
}

function cargarComunidades(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api_comunidades.php', true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Convertimos el JSON que envía PHP en un objeto JS
            let comunidades = JSON.parse(xhr.responseText);
            let select = document.getElementById('comunidades');

            // Limpiamos y añadimos la opción por defecto
            select.innerHTML = "<option value=''>Seleccionar...</option>";

            // Recorremos las comunidades y las añadimos al select
            comunidades.forEach(comunidad=> {
                let nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = comunidad.id;
                nuevaOpcion.textContent = comunidad.nombre;
                select.appendChild(nuevaOpcion);
            });
        };
    }
    xhr.send();
}

function cargarProvincias(e) {
    // Obtener el valor seleccionado del primer select
    let idComunidad = document.getElementById("comunidades").value;
    
    // Si no hay nada seleccionado, no enviamos la petición
    if (idComunidad == "") return;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api_provincias.php?cod=' + idComunidad, true)

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            let xml = xhr.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
            
            // Buscamos todas las etiquetas provincia y las recogemos en una lista (HTMLColection)
            let listaProvincias = xml.getElementsByTagName("provincia");

            let selectProv = document.getElementById("provincias");
            selectProv.innerHTML = "<option value=''>Seleccionar...</option>";

            // Recorremos la lista
            for (let i = 0; i < listaProvincias.length; i++) {
                // De cada provincia sacamos el texto de las etiquetas id y nombre
                let id = listaProvincias[i].getElementsByTagName("id")[0].textContent;
                let nombre = listaProvincias[i].getElementsByTagName("nombre")[0].textContent;

                let nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = id;
                nuevaOpcion.textContent = nombre;
                selectProv.appendChild(nuevaOpcion);
            }

        }
    };
    xhr.send();


}
