addEventListener('load', cargarZonas, false);

function cargarZonas(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','api/zonas_json.php', true)

    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("panel-aviones").innerHTML = "Tiempo de espera vencido";
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) { // Correcto
            try {   
                let zonas = JSON.parse(xhr.responseText);
                console.log(zonas);
                pintarZonas(zonas);
                
            } catch (ex) { // Error
                document.querySelector("panel-aviones").innerHTML = `Error al cargar las zonas: ` + ex.message;
            }
        }
    }

    xhr.send();

}

function pintarZonas(zonas) {
    let panel = "";
    const zonaAviones=document.getElementsByClassName("panel-aviones")[0];
    for (let i = 0; i < zonas.length; i++) {
        let boton = `<button class="zona" type="button" onclick=cargarInformacion(this) title="${zonas[i].modelo}" data-avion-id="${zonas[i].id}" style="top: ${zonas[i].top_pos}; left: ${zonas[i].left_pos}; width: ${zonas[i].width_pos}; height: ${zonas[i].height_pos};"></button>`;
        // console.log(boton);
        zonaAviones.insertAdjacentHTML("beforeend", boton);
        
    }
}


function cargarInformacion(boton) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/aviones_xml.php', true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("info-avion").innerHTML = "Tiempo de espera vencido";
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) { // Correcto
            try {   
                let xml = xhr.responseXML;
                console.log(xml);
                pintarInformacion(xml);
                
            } catch (ex) { // Error
                document.querySelector("info-avion").innerHTML = `Error al cargar las zonas: ` + ex.message;
            }
        }
    }

    xhr.send(`id=${boton.getAttribute("data-avion-id")}`);
}

function pintarInformacion(xml) {
    
    const infoAviones = document.getElementById("info-avion");

    let id = xml.getElementsByTagName("id")[0].textContent;
    let modelo = xml.getElementsByTagName("modelo")[0].textContent;
    let informacion = xml.getElementsByTagName("informacion")[0].textContent;

    infoAviones.innerHTML = `Id: ${id}<br>Modelo: ${modelo}<br>Informacion: ${informacion}`
    
}