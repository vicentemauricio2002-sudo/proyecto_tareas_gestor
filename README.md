# Página Gestora de tareas

## Descripción
Esta página es una herramienta para la gestión de proyectos y tareas, todo organizado en una tabla Kanban organizada en columnas diferentes: "Pendiente", "En Proceso" y "Completados"

La página te entrega un formulario en el que ingresas tareas utilizando sus campos "Descripción", "Prioridad" y "Fecha límite" para añadir la tarea al tablero Kanban en la sección "Pendiente". Desde "Pendiente" pasas las tareas a "En Progreso" y finalmente las pasas a "Completadas"

## Características

- **Tablero Kanban Interactivo:** Tres columnas (Pendientes, En Progreso, Completadas).
- **Persistencia de Datos:** Uso de `LocalStorage` para que las tareas no se borren al cerrar el navegador.
- **Formulario Validado:** Captura de descripción, prioridad y fecha límite.
- **Diseño Responsive:** Adaptado para dispositivos móviles y escritorio.
- **Contadores en Tiempo Real:** Seguimiento numérico de tareas por columna.

---

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica del sitio.
- **CSS3:** Diseño personalizado con Flexbox y Media Queries.
- **JavaScript (Vanilla):** Lógica de programación, manipulación del DOM y manejo de arreglos.
- **LocalStorage:** Almacenamiento local del navegador.

---

## Estructura del Proyecto

```text
proyecto_tareas_gestor/

├── index.html
├── README.md
├── assets/
│       ├── css/
│       │     ├── style.css
│       │     └── responsive.css
│       ├── js/
│       │    └── script.js
│       ├── img/
│       │    ├── logo.pn
│       │    └── favicon.ico
│       └── fonts/
└── docs/
     └── uso_ia.md
