function bonoloto() {
    let resultado = [];
    while (resultado.length < 6) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!resultado.includes(num)) {
            resultado.push(num);
        }
    }
    return resultado;
}

function iniciar() {
    let combinacion = bonoloto();
    let tabla = document.getElementById("loteriatable");
    tabla.innerHTML = "";

    let numero = 1;
    for (let fila = 0; fila < 7; fila++) {
        let tr = document.createElement("tr");
        for (let col = 0; col < 7; col++) {
            let td = document.createElement("td");
            if (numero <= 49) {
                td.textContent = numero;
                if (combinacion.includes(numero)) {
                    td.className = "forma1";
                } else {
                    td.className = "forma2";
                }
                numero++;
            }
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}

window.onload = function() {
    document.getElementById("botonGenerar").onclick = iniciar;
};
