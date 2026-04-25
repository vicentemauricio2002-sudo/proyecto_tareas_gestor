let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

renderizarTareas('todo');
renderizarTareas('doing');
renderizarTareas('done');

function renderizarTareas(estado) {
    let tareasHTML = "";
    
    tareas
        .filter((tarea) => tarea.estado == estado)
        .forEach((tarea) => {
            let textoBoton = estado === "todo" ? "Pasar a En Progreso" : "Pasar a Completada";
            
            const botonHTML = `
                <button type="button" class="btn-cambio" onclick="cambiarEstadoTarea(event, ${tarea.id}, '${tarea.estado}')">
                    ${textoBoton}
                </button>`;


            tareasHTML += `
                <div class="tarea">
                    <h3 class="bold">${tarea.descripcion}</h3>
                    <p>🔥 Prioridad: ${tarea.prioridad}</p>
                    <p>📅 Límite: ${tarea.fecha}</p>
                    ${estado !== "done" ? botonHTML : '<span class="bold">✅ ¡Terminada!</span>'}
                </div>`;
        });

    let containerElement = document.getElementById(estado + "Container");
    if (containerElement) {
        containerElement.innerHTML = tareasHTML;
    }

    actualizarContadorVisual(estado);
}

function AgregarNuevaTarea(e) {
    e.preventDefault();

    let descripcion = document.getElementById("descripcion").value;
    let prioridad = document.getElementById("prioridad").value;
    let fecha = document.getElementById("fecha").value;

    const nuevaTarea = {
        id: Date.now(),
        descripcion: descripcion,
        prioridad: prioridad,
        fecha: fecha,
        estado: "todo",
    };

    tareas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    
    renderizarTareas("todo");
    e.target.reset();
}

function cambiarEstadoTarea(e, id, estadoAnterior) {
    e.preventDefault();
    let indiceTarea = tareas.findIndex((tarea) => tarea.id == id);
    let nuevoEstado;

    if (estadoAnterior == "todo") {
        nuevoEstado = "doing";
    } else if (estadoAnterior == "doing") {
        nuevoEstado = "done";
    }

    if (nuevoEstado) {
        tareas[indiceTarea].estado = nuevoEstado;
        localStorage.setItem('tareas', JSON.stringify(tareas));
        
        renderizarTareas(estadoAnterior);
        renderizarTareas(nuevoEstado);
    }
}

function actualizarContadorVisual(estado) {
    let columnaId = "";
    
    if (estado === "todo") columnaId = "pendientes";
    else if (estado === "doing") columnaId = "en-progreso";
    else if (estado === "done") columnaId = "completadas";

    const contador = document.querySelector(`#${columnaId} .contador`);
    
    if (contador) {
        const total = tareas.filter(t => t.estado === estado).length;
        contador.innerText = total;
    }
}