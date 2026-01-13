let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];


    // Poblar seguro médico

window.onload = function () {

    // Poblar select seguro médico
    let selSeguro = document.getElementById("inputSeguroMedico");

    SEGUROS_MEDICOS.forEach(seg => {
        let op = document.createElement("option");
        op.value = seg.value;
        op.textContent = seg.texto;
        selSeguro.appendChild(op);
    });


    // Activar y desactivar especialidad

    let rbFamilia = document.getElementById("inputMedicoFamilia");
    let rbEspecialista = document.getElementById("inputMedicoEspecialista");
    let selEspecialidad = document.getElementById("inputEspecialidad");

    rbFamilia.addEventListener("click", () => {
        selEspecialidad.disabled = true;
        selEspecialidad.value = "";
    });

    rbEspecialista.addEventListener("click", () => {
        selEspecialidad.disabled = false;
    });


    // Validación al enviar el formulario

    document.getElementById("enviar").addEventListener("click", function (e) {

        limpiarErrores();

        let ok = true;


        
        // Nombre / apellidos
        let nombre = document.getElementById("inputNombre").value.trim();
        let apellidos = document.getElementById("inputApellidos").value.trim();

        if (nombre === "") {
            mostrarError("inputNombre", "El nombre es obligatorio");
            ok = false;
        }
        if (apellidos === "") {
            mostrarError("inputApellidos", "Los apellidos son obligatorios");
            ok = false;
        }


        // Validación del dni

        let dni = document.getElementById("inputDNI").value.trim().toUpperCase();
        let patron = /^[0-9]{8}[A-Z]$/;

        if (!patron.test(dni)) {
            mostrarError("inputDNI", "Formato de DNI no válido");
            ok = false;
        } else {
            // Validar letra
            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let numero = parseInt(dni.substring(0, 8));
            let letraCorrecta = letras[numero % 23];

            if (dni[8] !== letraCorrecta) {
                mostrarError("inputDNI", "La letra del DNI no es válida");
                ok = false;
            }
        }

    
        // Seguro médico

        if (document.getElementById("inputSeguroMedico").value === "") {
            mostrarError("inputSeguroMedico", "Debe seleccionar un seguro médico");
            ok = false;
        }


        
        // Especialidad si es especialista

        if (rbEspecialista.checked && selEspecialidad.value === "") {
            mostrarError("inputEspecialidad", "Debe seleccionar una especialidad");
            ok = false;
        }

        
        // Fecha - lunes a jueves
        
        let fecha = document.getElementById("inputFechaCita").value;
        if (fecha === "") {
            mostrarError("inputFechaCita", "Debe seleccionar una fecha");
            ok = false;
        } else {
            let diaSemana = new Date(fecha).getDay(); // lunes=1 ... jueves=4

            if (diaSemana < 1 || diaSemana > 4) {
                mostrarError("inputFechaCita", "El día de la cita sólo puede ser de lunes a jueves");
                ok = false;
            }
        }


        // Hora segun el día

        let hora = document.getElementById("inputHoraCita").value;

        if (hora === "") {
            mostrarError("inputHoraCita", "Debe seleccionar una hora válida");
            ok = false;
        } else {

            let diaSemana = new Date(fecha).getDay();

            if (diaSemana >= 1 && diaSemana <= 3) {
                // lunes a miércoles → 10:00–14:15
                if (hora < "10:00" || hora > "14:15") {
                    mostrarError("inputHoraCita",
                        "Hora no válida. Lunes-Miércoles: 10:00 a 14:15");
                    ok = false;
                }
            } else if (diaSemana === 4) {
                // jueves → 18:30–20:00
                if (hora < "18:30" || hora > "20:00") {
                    mostrarError("inputHoraCita",
                        "Hora no válida. Jueves: 18:30 a 20:00");
                    ok = false;
                }
            }
        }

        // Si hay errores evita que el formulario se envíe
        if (!ok) e.preventDefault();
    });
};



// Funciones auxiliares
function mostrarError(campoId, mensaje) {
    let campo = document.getElementById(campoId);
    campo.style.border = "2px solid red";

    let p = document.createElement("p");
    p.className = "text-danger";
    p.textContent = mensaje;
    campo.insertAdjacentElement("afterend", p);
}

function limpiarErrores() {
    document.querySelectorAll(".text-danger").forEach(e => e.remove());
    document.querySelectorAll("input, select").forEach(c => c.style.border = "");
}
