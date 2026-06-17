addEventListener('load', cargarZonas, false);


function cargarZonas(e) {
    
    // alert("Hola");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/zonas_json.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("panel-aviones").innerHTML = "Tiempo de espera vencido";
    };

     xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let zonas = JSON.parse(xhr.responseText);
                console.log(zonas);
                dibujarZonas(zonas);
            } catch (ex) {
                document.querySelector("panel-aviones").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }

        }
     }

     xhr.send();

}

function dibujarZonas(zonas) {
        
        let panel = "";
        const zonaAviones=document.getElementsByClassName("panel-aviones")[0];
        for (let i = 0; i < zonas.length; i++) {
            let title="";
            let top="";
            let boton= `<button class="zona" type="button" onclick=cargarInformacion(this) title="${zonas[i].modelo}" data-avion-id="${zonas[i].avion_id}" style="top: ${zonas[i].top_pos}; left: ${zonas[i].left_pos}; width: ${zonas[i].width_pos}; height: ${zonas[i].height_pos};"></button>`;
            zonaAviones.insertAdjacentHTML("beforeend", boton);
            // console.log(boton);
        }

}

function cargarInformacion(boton) {
    console.log(boton);
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let xml = xhr.responseXML;
                // console.log(xml);
                pintarInformacion(xml);
            } catch (ex) {
                document.getElementById("info-avion").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            document.getElementById("info-avion").innerHTML = "Error al cargar los datos";
        }
    }

    xhr.open('POST', 'api/aviones_xml.php', 'true');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    xhr.ontimeout = 3000;
    xhr.ontimeout = () => {
        document.getElementById("info-avion").innerHTML = "Tiempo de espera vencido";
    };

    xhr.send(`id=${boton.getAttribute("data-avion-id")}`);
    // console.log(`id=${boton.getAttribute("data-avion-id")}`)

}

function pintarInformacion(xml) {
    
    // <!-- Id: 1<br>Modelo: F-23<br>Informacion: El F-23, conocido en pruebas como YF-23A, fue un prototipo furtivo desarrollado para el programa Advanced Tactical Fighter de la USAF. Destaco por su diseno enfocado en el sigilo y la alta velocidad, pero no entro en servicio porque la competicion la gano el YF-22.
    const infoAviones=document.getElementById("info-avion");

    let id = xml.getElementsByTagName("id")[0].textContent;
    let modelo = xml.getElementsByTagName("modelo")[0].textContent;
    let informacion = xml.getElementsByTagName("informacion")[0].textContent;

    infoAviones.innerHTML = `Id: ${id}<br>Modelo: ${modelo}<br>Informacion: ${informacion}`;

    

}