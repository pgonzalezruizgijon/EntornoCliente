const DURANCION_LANZAMIENTO=8*1000; // Tiempo en msg que está rotando el dado
const TIEMPO_ROTACION=500; // Cada cuantos msg cambia el dado
let idTemporizador; // id del temporizador setInterval que nos servirá para detenerlo

// Escribe aquí tu código
function lanzar() {
    if (idTemporizador !== null) {
        clearInterval(idTemporizador);
    }

    const dado = document.getElementById("dado");

    idTemporizador = setInterval(() => {
        dado.textContent = Math.floor(Math.random() * 6) + 1;
    }, TIEMPO_ROTACION);

    setTimeout(() => {
        clearInterval(idTemporizador);
        idTemporizador = null;
    }, DURACION_LANZAMIENTO);
}