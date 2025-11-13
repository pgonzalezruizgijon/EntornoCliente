document.addEventListener("DOMContentLoaded", function() {
  const tbody = document.querySelector("tbody");
  const txtCaja = document.getElementById("txtCaja");
  const fila1Input = document.getElementById("input-fila1");
  const fila2Input = document.getElementById("input-fila2");

  window.insertarFila = function() {
    const valor = txtCaja.value.trim();
    if (valor === "") return;
    const tr = crearFila(valor);
    tbody.appendChild(tr);
    txtCaja.value = "";
  };

  function crearFila(texto) {
    const tr = document.createElement("tr");
    const tdElemento = document.createElement("td");
    tdElemento.textContent = texto;

    const tdAcciones = document.createElement("td");
    tdAcciones.append(
      crearBoton("Copiar encima", () => copiarEncima(tr)),
      crearBoton("Borrar", () => borrarFila(tr)),
      crearBoton("Actualizar", () => actualizarFila(tr)),
      crearBoton("Arriba", () => moverArriba(tr)),
      crearBoton("Abajo", () => moverAbajo(tr))
    );

    tr.append(tdElemento, tdAcciones);
    return tr;
  }

  function crearBoton(texto, accion) {
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = texto;
    btn.onclick = accion;
    return btn;
  }

  function copiarEncima(tr) {
    const texto = tr.children[0].textContent;
    const nueva = crearFila(texto + " (copia)");
    tbody.insertBefore(nueva, tr);
  }

  function borrarFila(tr) {
    tbody.removeChild(tr);
  }

  function actualizarFila(tr) {
    const nuevo = prompt("Nuevo texto:", tr.children[0].textContent);
    if (nuevo !== null && nuevo.trim() !== "") {
      tr.children[0].textContent = nuevo;
    }
  }

  function moverArriba(tr) {
    if (!tr.previousElementSibling) {
      alert("La fila no se puede mover hacia arriba");
    } else {
      tbody.insertBefore(tr, tr.previousElementSibling);
    }
  }

  function moverAbajo(tr) {
    if (!tr.nextElementSibling) {
      alert("La fila no se puede mover hacia abajo");
    } else {
      tbody.insertBefore(tr, tr.nextElementSibling.nextElementSibling);
    }
  }

  window.intercambiarFilas = function() {
    const filas = tbody.children;
    const numFilas = filas.length;
    const f1 = parseInt(fila1Input.value, 10) - 1; // índice base 0
    const f2 = parseInt(fila2Input.value, 10) - 1;

    let mensajeError = "";
    if (isNaN(f1) || f1 < 0 || f1 >= numFilas) {
      mensajeError += `Fila 1 debe estar comprendido del 1 al ${numFilas}\n`;
    }
    if (isNaN(f2) || f2 < 0 || f2 >= numFilas) {
      mensajeError += `Fila 2 debe estar comprendido del 1 al ${numFilas}\n`;
    }
    if (f1 === f2 && mensajeError === "") {
      mensajeError += "No se puede intercambiar la misma fila";
    }
    if (mensajeError) {
      alert(mensajeError.trim());
      return;
    }

    // Intercambiar filas en el DOM
    const tr1 = filas[f1];
    const tr2 = filas[f2];
    const siguiente = tr2.nextElementSibling;
    tbody.insertBefore(tr2, tr1);
    if (siguiente === tr1) {
      tbody.insertBefore(tr1, tr2);
    } else {
      tbody.insertBefore(tr1, siguiente);
    }
  };
});
