addEventListener('load', () => {
    cargarConciertos(false); // Por defecto carga todos

    document.getElementById('btnTodos').addEventListener('click', () => cargarConciertos(false));
    document.getElementById('btnFuturos').addEventListener('click', () => cargarConciertos(true));
});

function cargarConciertos(soloFuturos) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/get_conciertos.php', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const conciertos = xml.getElementsByTagName("concierto");
            const tabla = document.getElementById("tablaConciertos");
            tabla.innerHTML = "";

            // Fecha de HOY (importante poner horas a cero para comparar solo días)
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            for (let i = 0; i < conciertos.length; i++) {
                const artista = conciertos[i].getElementsByTagName("artista")[0].textContent;
                const fechaStr = conciertos[i].getElementsByTagName("fecha")[0].textContent;
                const recinto = conciertos[i].getElementsByTagName("recinto")[0].textContent;
                const precio = conciertos[i].getElementsByTagName("precio")[0].textContent;

                // Convertir el string del XML a objeto Date
                const fechaC = new Date(fechaStr);
                fechaC.setHours(0, 0, 0, 0);

                // Lógica de filtrado
                if (soloFuturos && fechaC < hoy) {
                    continue; // Si solo queremos futuros y este es pasado, saltamos al siguiente
                }

                const fila = document.createElement("tr");
                let celdaAccion = "";

                if (fechaC < hoy) {
                    // CONCIERTO PASADO
                    fila.classList.add("pasado");
                    celdaAccion = `<button class="btn btn-secondary btn-sm" disabled>Finalizado</button>`;
                } else {
                    // CONCIERTO FUTURO
                    fila.classList.add("futuro");
                    
                    // Cálculo de días restantes
                    const diferenciaMs = fechaC - hoy;
                    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
                    
                    celdaAccion = `<button class="btn btn-primary btn-sm btn-comprar" data-dias="${dias}">
                                    Comprar (${dias} días)</button>`;
                }

                fila.innerHTML = `
                    <td>${artista}</td>
                    <td>${fechaStr}</td>
                    <td>${recinto}</td>
                    <td>${precio}€</td>
                    <td>${celdaAccion}</td>
                `;

                // Evento para el botón
                const btn = fila.querySelector(".btn-comprar");
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        const d = e.target.getAttribute("data-dias");
                        alert(`¡Date prisa! Solo faltan ${d} días para el concierto de ${artista}`);
                    });
                }

                tabla.appendChild(fila);
            }
        }
    };
    xhr.send();
}