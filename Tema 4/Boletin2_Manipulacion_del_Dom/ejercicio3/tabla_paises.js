const paises = [
  {
      nombre: "Francia",
      capital: "Paris",
      habitantes: 67407241,
      idioma: "Francés",
      imagen: "img/france.png"
  },
  {
      nombre: "Alemania",
      capital: "Berlin",
      habitantes: 83149300,
      idioma: "Alemán",
      imagen: "img/germany.png"
  },
  {
      nombre: "Italy",
      capital: "Roma",
      habitantes: 60257566,
      idioma: "Italiano",
      imagen: "img/italy.png"
  },
  {
      nombre: "Portugal",
      capital: "Lisboa",
      habitantes: 10295909,
      idioma: "Portugués",
      imagen: "img/portugal.png"
  },
  {
      nombre: "España",
      capital: "Madrid",
      habitantes: 47450795,
      idioma: "Español",
      imagen: "img/spain.png"
  }
];

function crearTabla() {
    const tabla = document.getElementById("tabla-paises");
    const encabezados = ["Nº", "Pais", "Capital", "Habitantes", "Bandera", "Acciones"];
    // Crear encabezado
    const thead = tabla.querySelector("thead");
    const trEncabezado = document.createElement("tr");
    encabezados.forEach(txt => {
        const th = document.createElement("th");
        th.innerText = txt;
        th.style.fontWeight = "bold";
        trEncabezado.appendChild(th);
    });
    thead.appendChild(trEncabezado);

    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = ""; // Por si se regenera la tabla
    paises.forEach((pais, i) => {
        const tr = document.createElement("tr");
        // Número
        const tdNum = document.createElement("td");
        tdNum.innerText = (i + 1);
        tr.appendChild(tdNum);

        // País
        const tdPais = document.createElement("td");
        tdPais.innerText = pais.nombre;
        tr.appendChild(tdPais);

        // Capital
        const tdCapital = document.createElement("td");
        tdCapital.innerText = pais.capital;
        tr.appendChild(tdCapital);

        // Habitantes
        const tdHab = document.createElement("td");
        tdHab.innerText = pais.habitantes;
        tr.appendChild(tdHab);

        // Bandera (imagen + nombre debajo)
        const tdBandera = document.createElement("td");
        const img = document.createElement("img");
        img.src = pais.imagen;
        img.alt = pais.nombre;
        img.style.height = "45px";
        img.style.display = "block";
        img.style.margin = "0 auto";
        tdBandera.appendChild(img);

        const txtBand = document.createElement("div");
        txtBand.innerText = pais.nombre === "Italy" ? "Italy" : pais.nombre;
        txtBand.style.textAlign = "center";
        tdBandera.appendChild(txtBand);

        tr.appendChild(tdBandera);

        // Acciones
        const tdAcciones = document.createElement("td");
        tdAcciones.appendChild(crearBoton("Idioma", () => alert(pais.idioma)));
        tdAcciones.appendChild(crearBoton("Borrar", () => borrarFila(tr)));
        tdAcciones.appendChild(crearBoton("Arriba", () => moverArriba(tr)));
        tdAcciones.appendChild(crearBoton("Abajo", () => moverAbajo(tr)));
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    });
}

function crearBoton(txt, accion) {
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = txt;
    btn.onclick = accion;
    btn.style.margin = "2px 5px";
    return btn;
}

function borrarFila(tr) {
    tr.remove();
}

function moverArriba(tr) {
    if (!tr.previousElementSibling) {
        alert("La fila no se puede mover hacia arriba");
    } else {
        tr.parentNode.insertBefore(tr, tr.previousElementSibling);
    }
}

function moverAbajo(tr) {
    if (!tr.nextElementSibling) {
        alert("La fila no se puede mover hacia abajo");
    } else {
        tr.parentNode.insertBefore(tr, tr.nextElementSibling.nextElementSibling);
    }
}

document.addEventListener("DOMContentLoaded", crearTabla);
